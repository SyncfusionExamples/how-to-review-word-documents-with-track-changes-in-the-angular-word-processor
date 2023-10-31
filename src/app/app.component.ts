import { Component, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('documentEditor') editorObj !: DocumentEditorContainerComponent;
  public onBtnClk(){
    // this.editorObj.documentEditor.revisions.acceptAll() //accept all revisions
    // this.editorObj.documentEditor.revisions.rejectAll() //reject all revisions
    //this.editorObj.documentEditor.revisions.get(0).accept() //accept specific revision
    this.editorObj.documentEditor.revisions.get(1).reject(); //reject specific revision
  }

  public nextRevision(){
    this.editorObj.documentEditor.selection.navigateNextRevision();
  }
  public previousRevision(){
    this.editorObj.documentEditor.selection.navigatePreviousRevision();
  }

  public protection(){
    this.editorObj.documentEditor.editor.enforceProtection('123','RevisionsOnly');
  }
  public removeprotection(){
    this.editorObj.documentEditor.editor.stopProtection('123');
  }
}
