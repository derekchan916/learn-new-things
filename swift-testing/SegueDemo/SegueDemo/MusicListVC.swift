//
//  MusicListVC.swift
//  SegueDemo
//
//  Created by Derek Chan on 10/11/16.
//  Copyright © 2016 derek. All rights reserved.
//

import UIKit

class MusicListVC: UIViewController {

    @IBOutlet weak var BackBtn: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor.blue
    }

    @IBAction func BackBtnPressed(_ sender: AnyObject) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func LoadSongPressed(_ sender: AnyObject) {
        let songTitle = "This Town"
        performSegue(withIdentifier: "PlaySongVC", sender: songTitle)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if let destination = segue.destination as? PlaySongVC {
            
            if let song = sender as? String {
                destination.selectedSong = song
            }
        }
    }
}
