// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
const appBackground =
  "https://thenextweb.com/wp-content/blogs.dir/1/files/2015/06/Prague_Getty.jpg";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('BlackSuper360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
<<<<<<< HEAD
  r360.compositor.setBackground(r360.getAssetURL("wakandaMuseum360.jpg"));
=======
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
>>>>>>> 62e5bd5d1cc9e723c275c0018db294f446002dab
}

window.React360 = {init};
