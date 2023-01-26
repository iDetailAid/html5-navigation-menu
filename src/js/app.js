
 /**
  * An example of how to expose custom events / actions to the iDetailAid user interface.
  * And resize the HTML package based on user input
  *
  * @author iDetailAid team
  * @see https://docs.idetailaid.co.uk/html-packages
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


document.addEventListener('slideShown', async (event) => {
  
  // grab the event detail
  // @see https://docs.idetailaid.co.uk/dev-docs/ida-events/#slide-eventdetail-properties
  
  // Form data set at the slide level will be saved into `event.detail.slide.meta` object.
  // Form data set at the template level will be saved into `event.detail.template.meta` object.
  // You access it via the namespaces used when creating the form: `event.detail.slide.meta.my_namespace.property_name` 
  // so in this case `event.detail.slide.meta.navigation_settings.active_item`
  // for simplicity we use the data-event name to target the items

  // Clear active items for slide preview in the editor `slideShown` is fired when custom form data is changed
  document.querySelectorAll('.item').forEach( item => item.classList.remove('active') );
  const activeItem = event.detail.slide?.meta?.navigation_settings?.active_item;
  const item = document.querySelector('.item[data-event="'+activeItem+'"]');
  

  if(item) {
    item.classList.add('active');
  }

  // Get the localisation data from the template level (as that's where we defined it in the manifest)
  const i18n = event.detail.template?.meta?.navigation_i18n;
  
  if(i18n) {
    const items = document.querySelectorAll('.item');
    items.forEach( item => {
      // item.dataset.event holds the event name that is also the key for the localisation values set in manifest.json
      if(i18n[item.dataset.event]) {
        item.innerHTML = i18n[item.dataset.event] 
      }
    });
  }
});
  
window.addEventListener('load', () => {

  const burgerMenuBtn = document.querySelector('#burgerMenuBtn');
  const backdrop = document.querySelector('#backdrop');
  const items = document.querySelectorAll('.item');
  

  burgerMenuBtn.addEventListener('click', () => {
    document.body.classList.contains('open') ? close() : open();
  });
    
    
  backdrop.addEventListener('click', () => close() );
  
  items.forEach( item => {
    item.addEventListener('click', event => {
      // item.dataset.event holds the events name to trigger :  <div class="item" data-event="openOverlay">Open Overlay</div>
      // manifest.json exposes the same event names to the IDA UI for content creator to pick via UI
      ida.widget.trigger(item.dataset.event);
      close();
      });
  });

});


function open() {
  document.body.classList.add('open')
  // Call the IDA Api to make this package full screen so we can see and interact with the open menu
  ida.widget.fullscreen();
}

function close() {
  document.body.classList.remove('open')
  // Close it back down so its not blocking other parts of the presentation
  setTimeout(() => ida.widget.exitFullscreen(), 250 );
  
  
}