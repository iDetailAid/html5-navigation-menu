
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

window.addEventListener('load', () => {

  $('burger-menu').addEventListener('click', (event) => {
    $('menu').classList.toggle('open');
  });
  

  $('buttonA').addEventListener('click', (event) => {
    // pass event on to ida
    // see the file at /manifest.json on how to expose this event to the iDA user interface
    ida.iframe.trigger('openOverlay');
    $('menu').classList.remove('open')
  });
    
  $('buttonB').addEventListener('click', (event) => {
    ida.iframe.trigger('openSlide');
    $('menu').classList.remove('open')
  });
    
  $('buttonC').addEventListener('click', (event) => {
    ida.iframe.trigger('navigateLeft');
    $('menu').classList.remove('open')
  });

});
