
 /**
  * An example of how to expose custom events to the iDetailAid user interface.
  *
  * @author iDetailAid team
  * @see https://docs.idetailaid.co.uk/dev-docs/html-packages/#exposing-events-actions-to-the-idetailaid-user-interface
  *
  * This file is licensed under the Apache License, Version 2.0 (the "License").
  * You may not use this file except in compliance with the License. A copy of
  * the License is located at
  *
  * https://www.apache.org/licenses/LICENSE-2.0
  *
  * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  * CONDITIONS OF ANY KIND, either express or implied. See the License for the
  * specific language governing permissions and limitations under the License.
  */

$ = document.getElementById.bind(document);

// The window.ida object is injected when run inside the iDetailAid Viewer.
// We stub this out here so we can run locally outside of iDetailAid for testing
if( !window.ida ) {
  window.ida = {iframe:{trigger: (eventName) => console.log(`call ida.iframe.trigger('${eventName}')`)}};
}


window.addEventListener('load', () => {

  $('buttonA').addEventListener('click', (event) => {
    //pass event on to ida
    // see the file at /manifest.json on how to expose this event to the iDA user interface
    ida.iframe.trigger('openOverlay');
  });
    
  $('buttonB').addEventListener('click', (event) => {
    ida.iframe.trigger('openSlide');
  });
    
  $('buttonC').addEventListener('click', (event) => {
    ida.iframe.trigger('navigateLeft');
  });

});
