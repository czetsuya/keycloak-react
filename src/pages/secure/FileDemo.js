import React, { Component } from 'react';
import {FileUpload} from 'primereact/components/fileupload/FileUpload';
import {Growl} from 'primereact/components/growl/Growl';

export class FileDemo extends Component {

    constructor() {
        super();
        this.state = {messages:null};

        this.onUpload = this.onUpload.bind(this);
        this.uploadedFiles = [];
    }

    onUpload(event){
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.setState({messages:[{severity: 'info', summary: 'File Uploaded', detail: ''}]});
    }

    render() {
        return(
            <div className="container">
                <div className="p-grid">
                    <div className="p-col-12">
                        <div className="card">
                            <h1>Upload</h1>
                            <Growl value={this.state.messages}/>
                    
                            <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} multiple={true} accept="image/*" maxFileSize={1000000}>
                                {this.uploadedFiles.length &&
                                <ul>
                                    {this.uploadedFiles && this.uploadedFiles.map((file,index)=><li key={index}>{file.name} - {file.size} bytes</li>)}
                                </ul>}
                            </FileUpload>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
