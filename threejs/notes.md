To create a Three.js project, we’ll need at least the following:
A scene: consider this as the stage where every object needs to be added in order to be rendered
A camera: in this case we will use a perspective camera, but it could also be an orthographic camera.
A renderer that will display all the scene using WebGL.
One or more objects to render, in our case, we will create a plane, a sea and a sky (a few clouds)
One or more lights: there is also different types of lights available. In this project we will mainly use a hemisphere light for the atmosphere and a directional light for the shadows.

Let’s summarize what we need in order to create an object. We need to
create a geometry
create a material
pass them into a mesh
add the mesh to our scene