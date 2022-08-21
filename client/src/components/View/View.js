import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useLocation}  from "react-router-dom";
import { FamDiagram} from 'basicprimitivesreact';
import { PageFitMode,GroupByType,AnnotationType} from 'basicprimitives';
import { ShareData } from '../../redux/actions/A_Form';
import { useDispatch,useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const View = () => {
    var location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state) => state.R_Form);
    var arr=[];
    for (let index = 0; index < data.length; index++) {
    let id=data[index].id;
    let title=data[index].title;
    let label=data[index].label;
    let description=data[index].description;
    let image=data[index].image;
    let parents=data[index].parent.split(",").map((x)=> parseInt(x, 10));;
    arr.push({id,title,label,description,image,parents})
  }
    useEffect(() => {
        var email=location.pathname.replace("/byemail/","");
        dispatch(ShareData(email,navigate));
    }, [location]);
    var photos = {
        a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
        'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' + 
        'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' + 
        'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' + 
        'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' + 
        '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' + 
        '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' + 
        'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
      };
    const config = {
        pageFitMode: PageFitMode.AutoSize,
        defaultTemplateName: "contactTemplate",
        defaultLabelAnnotationTemplate: "LabelAnnotationTemplate",
        templates: [{
            name: "LabelAnnotationTemplate",
            itemSize: { width: 60, height: 20 },
            minimizedItemSize: { width: 3, height: 3 },
            highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
            onItemRender: ({ context: itemConfig }) => {
            return <div className="InLayoutLabel">
                {itemConfig.title}
            </div>;
            }
        }],

        autoSizeMinimum: { width: 100, height: 100 },
        showExtraArrows: false,
        arrowsDirection: GroupByType.Parents,
        normalLevelShift: 20,
        dotLevelShift: 20,
        lineLevelShift: 20,
        normalItemsInterval: 10,
        dotItemsInterval: 30,
        lineItemsInterval: 30,
        highlightItem: 0,
        linesWidth: 1,
        linesColor: "black",
        enableMatrixLayout: true,
        minimumMatrixSize: 3,
        items:arr
    };
    
      return (
        <div className="App">
          <FamDiagram centerOnCursor={true} config={config}/>
        </div>
        );
    
}

export default View