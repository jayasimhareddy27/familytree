import React from 'react';
import { FamDiagram} from 'basicprimitivesreact';
import { PageFitMode,GroupByType,AnnotationType} from 'basicprimitives';
import './assets/styles.css';



const Sample=({tree})=> {
  var arr=[];
  for (let index = 0; index < tree.length; index++) {
    let id=tree[index].id;
    let title=tree[index].title;
    let label=tree[index].label;
    let description=tree[index].description;
    let image=tree[index].image;
    let parents=tree[index].parent.split(",").map((x)=> parseInt(x, 10));;
    arr.push({id,title,label,description,image,parents})
  }
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
export default Sample;