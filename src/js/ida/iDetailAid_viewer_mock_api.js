window.uk = window.uk || {};
window.uk.co = window.uk.co || {};
window.uk.co.idetailaid = window.uk.co.idetailaid || {};

window.uk.co.idetailaid.Events = {ALL:['goto','goUp','goDown','goLeft','goRight','goBack','presentationLoad','presentationLoaded','manifestLoaded','slideLoad','slideLoaded','slideMove','slideEnter','slideShown','slideExit','slideMoved','slideUnload','virtualSlideShown','virtualSlideExit','overlayClosed','overlayOpen','overlayOpened','referenceOpen','videoPlay','videoSeeked','videoPause','videoEnded','arrowsRender','urlOpen','assetOpen','tap','doubletap','singletap','swiped','widgetAnimated','iFrameReady']};
window.uk.co.idetailaid.Utils = {dispatchIDAEvent:function(eventName, data) {
      var e, error, event;
      event = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        detail: data
      });
      try {
        if ((data != null ? data.element : void 0) != null) {
          return data.element.dispatchEvent(event);
        } else {
          return document.dispatchEvent(event);
        }
      } catch (error) {
        e = error;
        return console.log(e);
      }
    }};

window.uk.co.idetailaid.Viewer = window.uk.co.idetailaid.Viewer || {
api: {
writeMockAPI: (...args) => { 
  console.debug('Viewer.api.writeMockAPI called with:', args);
},
writeMockManifest: (...args) => { 
  console.debug('Viewer.api.writeMockManifest called with:', args);
},
triggerMockEvent: (...args) => {
  const triggerMockEvent = function(name, data) {
      if (data == null) {
        data = {};
      }
      if (!Events.ALL.includes(name)) {
        console.error("`" + name + "` is not a valid event name. Use one of", Events.ALL);
      }
      data.company = data.company || mockManifest.company;
      data.product = data.product || mockManifest.product;
      data.presentation = data.presentation || mockManifest.presentation;
      data.manifest = data.manifest || mockManifest;
      data.slide = data.slide || mockManifest.matrix[0][0];
      data.timeStamp = data.timeStamp || Date.now();
      if (['slideExit', 'overlayClose', 'overlayClosed', 'videoPause', 'videoEnded'].includes(name)) {
        data.duration = 12345;
      }
      if (['overlayOpen', 'overlayOpened', 'overlayClose', 'overlayClosed'].includes(name)) {
        data.slide = mockManifest.matrix[1][1];
        data.overlay = mockManifest.matrix[1][1].overlays[0];
      }
      if (['goBack', 'goUp', 'goDown', 'goLeft', 'goRight'].includes(name)) {
        data.destination = {
          slide: mockManifest.matrix[0][2]
        };
      }
      if (name === 'urlOpen') {
        data.url = 'https://www.idetailaid.co.uk';
      }
      if (name === 'assetOpen') {
        data.asset = {
          id: 100,
          file: '07feb1219520756f8f3236668cec01de.png',
          type: 'image/png'
        };
      }
      if (name === 'referenceOpen') {
        data.reference = {
          id: 100,
          file: '07feb1219520756f8f3236668cec01de.pdf',
          type: 'application/pdf',
          citation: '<i>Jones et al 1999</i>',
          number: 1,
          asset_id: 200
        };
      }
      if (['videoPlay', 'videoPause', 'videoEnded'].includes(name)) {
        data.video = {
          id: 100,
          file: '07feb1219520756f8f3236668cec01de.mov',
          src: '07feb1219520756f8f3236668cec01de.mov',
          type: 'video/quicktime',
          idaManaged: true,
          data: {}
        };
      }
      if (data.duration) {
        data.start = data.timeStamp - data.duration;
        data.end = data.timeStamp;
      }
      return Utils.dispatchIDAEvent(name, data);
    }

  const Events = window.uk.co.idetailaid.Events;
  const Utils = window.uk.co.idetailaid.Utils;
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  triggerMockEvent.apply(this, args);
},setArrows: (...args) => { 
  console.debug('Viewer.api.setArrows called with:', args);
},
getArrows: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=JSON.parse('[[[{"left":false,"right":false}],[{"right":false}],[],[{"up":false}]],[[{"up":false}]]]'); 
  
  console.debug('Viewer.api.getArrows called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
setSwipe: (...args) => { 
  console.debug('Viewer.api.setSwipe called with:', args);
},
getSwipe: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=JSON.parse('[[[{"left":false,"right":false}],[{"right":false}],[],[{"up":false}]],[[{"up":false}]]]'); 
  
  console.debug('Viewer.api.getSwipe called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
render: (...args) => { 
  console.debug('Viewer.api.render called with:', args);
},
goToSlide: (...args) => { 
  console.debug('Viewer.api.goToSlide called with:', args);
},
goTo: (...args) => { 
  console.debug('Viewer.api.goTo called with:', args);
},
goBack: (...args) => { 
  console.debug('Viewer.api.goBack called with:', args);
},
goUp: (...args) => { 
  console.debug('Viewer.api.goUp called with:', args);
},
goDown: (...args) => { 
  console.debug('Viewer.api.goDown called with:', args);
},
goLeft: (...args) => { 
  console.debug('Viewer.api.goLeft called with:', args);
},
goRight: (...args) => { 
  console.debug('Viewer.api.goRight called with:', args);
},
openOverlay: (...args) => { 
  console.debug('Viewer.api.openOverlay called with:', args);
},
closeOverlay: (...args) => { 
  console.debug('Viewer.api.closeOverlay called with:', args);
},
openReference: (...args) => { 
  console.debug('Viewer.api.openReference called with:', args);
},
openAsset: (...args) => { 
  console.debug('Viewer.api.openAsset called with:', args);
},
openUrl: (...args) => { 
  console.debug('Viewer.api.openUrl called with:', args);
},
showVirtualSlide: (...args) => { 
  console.debug('Viewer.api.showVirtualSlide called with:', args);
},
hideVirtualSlide: (...args) => { 
  console.debug('Viewer.api.hideVirtualSlide called with:', args);
},
getCurrentPresentation: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=function() {
            return mockManifest.presentation;
          }(); 
  
  console.debug('Viewer.api.getCurrentPresentation called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationManifest: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=function() {
            return mockManifest;
          }(); 
  
  console.debug('Viewer.api.getCurrentPresentationManifest called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationSlides: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=function() {
            return mockManifest.matrix;
          }(); 
  
  console.debug('Viewer.api.getCurrentPresentationSlides called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationCoreFlowSlides: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=function() {
            return mockManifest.matrix.map(function(col) {
              return col[0];
            });
          }(); 
  
  console.debug('Viewer.api.getCurrentPresentationCoreFlowSlides called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationSubFlowSlides: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=JSON.parse('[{"title":"Mock Slide One","file":"9560d5eeaaabed937b0a35e6fe4cc148.html","image":"9560d5eeaaabed937b0a35e6fe4cc148.png","mandatory":0,"reference_ids":[],"meta":{},"template_id":null,"overlays":[],"category":"Safety","id":1348}]'); 
  
  console.debug('Viewer.api.getCurrentPresentationSubFlowSlides called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentSlideDetails: (...args) => { 
  const mockManifest = window.uk.co.idetailaid.MockManifest;
  
  const data=function() {
            return {
              "slide": mockManifest.matrix[0][0],
              "x": 0,
              "y": 0,
              "element": {}
            };
          }(); 
  
  console.debug('Viewer.api.getCurrentSlideDetails called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},

}
}

// Set up the iFrame API calls
window.uk.co.idetailaid.iframe = window.uk.co.idetailaid.iframe || {
  trigger: (...args) => console.debug('ida.iframe.trigger called with :', args)
}

window.uk.co.idetailaid.slide = window.uk.co.idetailaid.slide || { slide:  window.uk.co.idetailaid.MockManifest ? window.uk.co.idetailaid.MockManifest.matrix[0][0] : {}, x:0, y:0, element:{} };
window.uk.co.idetailaid.template = window.uk.co.idetailaid.template || {template:window.uk.co.idetailaid.slide.template || {}, scope:{} };
window.uk.co.idetailaid.manifest = window.uk.co.idetailaid.manifest || window.uk.co.idetailaid.MockManifest;
     
if (window.Viewer && (window.Viewer != window.uk.co.idetailaid.Viewer)) {
  console.warn('Global var `Viewer` has already been defined, use `uk.co.idetailaid.Viewer` or `ida.Viewer` to target the iDetailAid Viewer');
} else if (!window.Viewer) {
  window.Viewer = window.uk.co.idetailaid.Viewer;
}

if (window.ida && (window.ida != window.uk.co.idetailaid)) {
  console.warn('Global var `ida` has already been defined, use `uk.co.idetailaid` to target the iDetailAid namespace');
} else if (!window.ida) {
  window.ida = window.uk.co.idetailaid;
}