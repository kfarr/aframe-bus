# aframe-bus
Experiment to make a city "paper" bus in XR form

Inspired by #Codevember 2018

## Quick links
https://kfarr.github.io/aframe-bus/codevember-02-time.html
https://kfarr.github.io/aframe-bus/codevember-03-carrot.html
https://kfarr.github.io/aframe-bus/codevember-04-sky.html
https://kfarr.github.io/aframe-bus/codevember-07-sea.html
https://kfarr.github.io/aframe-bus/codevember-09-green.html
https://kfarr.github.io/aframe-bus/codevember-15-fire.html

## 07-sea notes
* sea 10m below roadway (y = -10)
* remove other background / environment?
* superhands
* grabbable - see sticky example
* turn off velocity - velocity 0 ?
* 1:43 scale to match MTA toy bus
* then try puttin it all together
* entity reparenting / grabber

## Real Life Bus Dimensions

Orion Model VII Next Generation
https://cptdb.ca/wiki/index.php/Orion_International_%27Orion_VII%27
https://en.wikipedia.org/wiki/MTA_Regional_Bus_Operations_bus_fleet (search "Orion VII
Next Generation" for pictures)

Length 40' 10.5" = 12.459m

Width: 102" = 2.59 m

Height: 118.5” = 3.0099m (not including HVAC or battery, otherwise 132” or 335.28m for full HEV )

1:43 scale NYC MTA Bus Toy:
https://www.amazon.com/Daron-RT8468-MTA-11-Bus/dp/B00EVQJ5I2

## "Paper" Model Bus Dimensions

168 - height in px of front from bumper to roof
186 - height in px of right from bottom of wheels to roof

ratio = 168 / 186 = 0.903225806451613

height of front in m = 3.0099 * 0.903225806 = 2.7186
and move up 0.2913m



## Credits

Besides my code I attempted to source everything in the repo with creative commons content. Most credits and notes below, sorry if I have missed a few.

trees:
https://poly.google.com/view/2y-Cl3E7lMf
https://poly.google.com/view/8ICCdgc7CQd

island:
https://poly.google.com/view/eEz9hdknXOi

grass:
https://opengameart.org/content/3-seamless-grass-textures

fence:
https://poly.google.com/view/8ySm0IGHA5W

“Paper bus” source texture
http://i841.photobucket.com/albums/zz339/akamtabx36/Paperbuses/1722-3.png
https://cptdb.ca/uploads/monthly_06_2008/post-2065-1214100948.png



LED signs:
https://www.nyctransitforums.com/topic/13822-animated-luminator-bus-signs/?page=17

FONT for custom signs:
https://www.nyctransitforums.com/topic/11534-mta-luminator-bus-sign-fonts/

Top down cars and trucks both:
https://www.123rf.com/clipart-vector/bus_top_view.html?sti=od03in9pydp16ysu7p|&mediapopup=96963891
Bus only:
https://www.123rf.com/clipart-vector/bus_top_view.html?sti=lbyvx0m172ctlhijwo|&mediapopup=64825323

A-Frame clock component:
https://themarklee.com/2017/04/17/build-your-own-building-blocks-for-webvr-using-a-frame/

number placement:
https://untappedcities.com/2014/02/25/cities-101-what-are-those-numbers-on-top-of-buses-for/

streetlight:
https://poly.google.com/view/a7GJySoqzuL

sky:
https://www.flickr.com/photos/gadl/1374935110
sky2: https://spacedock.info/mod/924/Pood%27s%20Calm%20Nebula%20Skybox

ocean:
sky for environment map: https://www.cgskies.com/sky.php?sky=343
water normals: https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg

lens flares:
http://pngimg.com/imgs/nature/light/

building ideas:
https://poly.google.com/view/c-5balfj4bu
https://poly.google.com/view/6FQ_iKCIQd7

bus stop: Jeremy Eyring https://poly.google.com/view/7iBPwMlmfge
roadway: https://poly.google.com/view/dY7A5u4uuxE
tram: https://poly.google.com/view/2cVnZdfj-Gd
sidewalk: https://poly.google.com/view/8MDQir-qOAT

additional road texture options:
https://github.com/MicroGSD/RoadArchitect/blob/master/Materials/Textures/GSDRoad1_Diffuse.png
