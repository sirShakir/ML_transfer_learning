# ML_transfer_learning
Implemented transfer learning with Tensorflow. Would like to take same concept but implement using tensorflowJS

transfer_learning includes faster_rcnn_inception download coco model. 
The tensorflow libary setup include scripts such as train.py which starts training based on config file. 
Changes to the config file were made then renamed as pipeline.conf before training the prebuilt model on new images.
Result are located in trained_model folder

trained_model includes frozen_inference_graph.pb after training was complete.

tensorflowJS includes example of nueral network in javascript. This particular example takes rgb values and predicts what the color is based 
on which value is the greastest (red,green or blue). It works! Now to we can begin to try transfer learning to build custom object detection in JS. 

*The frozen_inference_graph.pb could not be uploaded do to massive file size
