//
//  portoflioApp.swift
//  Shared
//
//  Created by Joey Chang on 1/23/22.
//

import SwiftUI

@main
struct portoflioApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: portoflioDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
