//https://egghead.io/lessons/javascript-redux-extracting-presentational-components-todo-todolist
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
}
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			);
		default:
			return state;
	}
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default
			return state;
	}
}

const { combineReducers } = Redux;
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
}

const { component } = React;

const Link = ({
	active,
	children,
	onClick
}) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a href='#'
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

const mapStateToLinkProps = (
	state,
	ownProps
) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};

const mapDispatchToLinkProps = (
	dispatch,
	ownProps
) => {
	return {
		onClick: () => {
			dispatch(
				setVisibilityFilter(ownProps.filter)
			);
		}
	}
}
const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link)

class FilterLink extends Component {
	componentDidMount() {
		const {store} = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const {store} = this.context;
		const state = store.getState();

		return (
			<Link
				active={}
				onClick={() =>
					store.
				} />
				{props.children}
			</Link>
		);
	}
}
FilterLink.contextTypes = {
	store: React.propTypes.object
}

const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink
			filter='SHOW_ALL'
			>
			All
		</FilterLink>
		{', '}
		<FilterLink
			filter='SHOW_ACTIVE'
			>
			Active
		</FilterLink>
		{', '}
		<FilterLink
			filter='SHOW_COMPLETED'
			>
			Completed
		</FilterLink>
	</p>
);

const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li
		onClick={onClick}
		style={{textDecoration: completed ? 'line-through' : 'none'}}
		>
		{text}
	</li>
);



let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<input ref={node => {input = node;}}/>
			<button onClick={() => {
					dispatch(addTodo(input.value))
					input.value = '';
				}}>
				Add Todo
			</button>
		</div>
	)
}
AddTodo = connect()(AddTodo); //without args won't subscribe to the store but will send the dispatch

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				/>
		)}
	</ul>
)

const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
	}
}

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};
const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onTodoClick: (id) =>
		dispatch(toggleTodo(id))
	}
};
const { connect } = ReactRedux;
const VisibleTodoList = connect(
	mapStateToPros,
	mapDispatchToProps
)(TodoList);

//Don't need any of this below because of the connect and mapStateToProps
// class VisibleTodoList extends Component {
// 	componentDidMount() {
// 		const { store } = this.context;
// 		this.unsubscribe = store.subscribe(() =>
// 			this.forceUpdate()
// 		);
// 	}
//
// 	componentWillUnmount() {
// 		this.unsubscribe();
// 	}
//
// 	render() {
// 		const props = this.props;
// 		const { store } = this.context;
// 		const state = store.getState();
//
// 		return (
// 			<TodoList
// 				todos={getVisibleTodos(
// 					state.todos,
// 					state.visibilityFilter
// 				)
//
// 				}
// 				onTodoClick={ (id) =>
// 				dispatch({
// 					type: 'TOGGLE_TODO',
// 					id
// 				})
// 			}
// 		)
// 	}
// };
// VisibleTodoList.contextTypes = {
// 	store: React.PropTypes.object
// };

const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

const { Provider } = ReactRedux;
import { Provider } from 'react-redux';
const { createStore } = Redux;

ReactDOM.render(
	<Provider store={createStore(todoApp)}>
		<TodoApp />,
	</Provider>
	document.getElementById('root')
);

store.subscribe(render);
render();
