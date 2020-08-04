import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../file-dialog/file-dialog.component'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  json;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.json = {
      "files": [
        {
          "date": 1594773244,
          "display": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "gcodeAnalysis": {
            "dimensions": {
              "depth": 144.645,
              "height": 5.75,
              "width": 130.0
            },
            "estimatedPrintTime": 3044.4419044599326,
            "filament": {
              "tool0": {
                "length": 6875.940890000477,
                "volume": 16.53857599907211
              }
            },
            "printingArea": {
              "maxX": 170.0,
              "maxY": 142.645,
              "maxZ": 5.95,
              "minX": 40.0,
              "minY": -2.0,
              "minZ": 0.2
            }
          },
          "hash": "2c7b791cbe004fd86eb2bafa957900d0ca33e2d3",
          "name": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "origin": "local",
          "path": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "refs": {
            "download": "http://octopi.local/downloads/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
            "resource": "http://octopi.local/api/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode"
          },
          "size": 687003,
          "thumbnail": "plugin/prusaslicerthumbnails/thumbnail/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.png?20200715013404",
          "thumbnail_src": "prusaslicerthumbnails",
          "type": "machinecode",
          "typePath": [
            "machinecode",
            "gcode"
          ]
        },
        {
          "date": 1594773244,
          "display": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "gcodeAnalysis": {
            "dimensions": {
              "depth": 144.645,
              "height": 5.75,
              "width": 130.0
            },
            "estimatedPrintTime": 3044.4419044599326,
            "filament": {
              "tool0": {
                "length": 6875.940890000477,
                "volume": 16.53857599907211
              }
            },
            "printingArea": {
              "maxX": 170.0,
              "maxY": 142.645,
              "maxZ": 5.95,
              "minX": 40.0,
              "minY": -2.0,
              "minZ": 0.2
            }
          },
          "hash": "2c7b791cbe004fd86eb2bafa957900d0ca33e2d3",
          "name": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "origin": "local",
          "path": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "refs": {
            "download": "http://octopi.local/downloads/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
            "resource": "http://octopi.local/api/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode"
          },
          "size": 687003,
          "thumbnail": "plugin/prusaslicerthumbnails/thumbnail/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.png?20200715013404",
          "thumbnail_src": "prusaslicerthumbnails",
          "type": "machinecode",
          "typePath": [
            "machinecode",
            "gcode"
          ]
        },
        {
          "date": 1594773244,
          "display": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "gcodeAnalysis": {
            "dimensions": {
              "depth": 144.645,
              "height": 5.75,
              "width": 130.0
            },
            "estimatedPrintTime": 3044.4419044599326,
            "filament": {
              "tool0": {
                "length": 6875.940890000477,
                "volume": 16.53857599907211
              }
            },
            "printingArea": {
              "maxX": 170.0,
              "maxY": 142.645,
              "maxZ": 5.95,
              "minX": 40.0,
              "minY": -2.0,
              "minZ": 0.2
            }
          },
          "hash": "2c7b791cbe004fd86eb2bafa957900d0ca33e2d3",
          "name": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "origin": "local",
          "path": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "refs": {
            "download": "http://octopi.local/downloads/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
            "resource": "http://octopi.local/api/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode"
          },
          "size": 687003,
          "thumbnail": "plugin/prusaslicerthumbnails/thumbnail/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.png?20200715013404",
          "thumbnail_src": "prusaslicerthumbnails",
          "type": "machinecode",
          "typePath": [
            "machinecode",
            "gcode"
          ]
        },
        {
          "date": 1594773244,
          "display": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "gcodeAnalysis": {
            "dimensions": {
              "depth": 144.645,
              "height": 5.75,
              "width": 130.0
            },
            "estimatedPrintTime": 3044.4419044599326,
            "filament": {
              "tool0": {
                "length": 6875.940890000477,
                "volume": 16.53857599907211
              }
            },
            "printingArea": {
              "maxX": 170.0,
              "maxY": 142.645,
              "maxZ": 5.95,
              "minX": 40.0,
              "minY": -2.0,
              "minZ": 0.2
            }
          },
          "hash": "2c7b791cbe004fd86eb2bafa957900d0ca33e2d3",
          "name": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "origin": "local",
          "path": "Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
          "refs": {
            "download": "http://octopi.local/downloads/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode",
            "resource": "http://octopi.local/api/files/local/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.gcode"
          },
          "size": 687003,
          "thumbnail": "plugin/prusaslicerthumbnails/thumbnail/Echo_Dot_Gen3_socket-mount_holder_v3_-_Cover_0.25mm_PLA_MINI_58m.png?20200715013404",
          "thumbnail_src": "prusaslicerthumbnails",
          "type": "machinecode",
          "typePath": [
            "machinecode",
            "gcode"
          ]
        }
      ],
      "free": 12705959936,
      "total": 15287287808
    }
      
  }

  openDialog(obj){
    let dialogRef = this.dialog.open(FileDialogComponent, { 
      data: obj,
      panelClass: 'dialog-panel' });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        console.log(`Start Printing: ${obj.display}`);
      }
    })
  }
}
