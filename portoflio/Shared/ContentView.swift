//
//  ContentView.swift
//  Shared
//
//  Created by Joey Chang on 1/23/22.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: portoflioDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(portoflioDocument()))
    }
}
