class TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    @todo.save!
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: {}
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update!(todo_params)
    render json: @todo
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :boolean)
  end
end
