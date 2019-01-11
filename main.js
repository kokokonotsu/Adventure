const locations = {
    current_location: "",
    current_room: "room",
    home: {
        my_room: { name:"my room", visited: true,
            minimap_image: {
                door_closed_with_pillow_quilt_blanket: 
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                    <rect id="quilt" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-dasharray: 5 5; stroke-width:3; opacity: 0.5"/>
                        <g id="pillows">
                            <g id="pillow-1">
                                <rect x="131" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="131" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect x="9" y="80" width="2" height="40" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_closed_with_quilt_blanket: 
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                    <rect id="quilt" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-dasharray: 5 5; stroke-width:3; opacity: 0.5"/>
                        <g id="pillows">
                            <g id="pillow-1">
                                <rect x="131" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="131" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect x="9" y="80" width="2" height="40" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_closed_with_blanket: 
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                        <g id="pillows">
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect x="9" y="80" width="2" height="40" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_closed: 
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                        <g id="pillows">
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect x="9" y="80" width="2" height="40" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_open_with_pillow_quilt_blanket:
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                    <rect id="quilt" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-dasharray: 5 5; stroke-width:3; opacity: 0.5"/>
                        <g id="pillows">
                            <g id="pillow-1">
                                <rect x="131" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="131" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <polygon points="9,80 30,40 31,41 10,81" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_open_with_quilt_blanket:
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                    <rect id="quilt" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-dasharray: 5 5; stroke-width:3; opacity: 0.5"/>
                        <g id="pillows">
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <polygon points="9,80 30,40 31,41 10,81" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_open_with_blanket:
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="blanket" x="129" y="109" width="60" height="55" style="fill:#0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                        <g id="pillows">
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <polygon points="9,80 30,40 31,41 10,81" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`,
                door_open:
                    `<rect x="10" y="10" width="180" height="180" style="fill:#111111; stroke:#0c0; stroke-width:1"/>
                    <rect id="bed-frame" x="129" y="109" width="60" height="80" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                        <g id="pillows">
                            <g id="pillow-2">
                                <rect x="159" y="170" width="28" height="15" style="fill: #111111; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                                <rect x="159" y="170" width="28" height="15" style="fill: #0c0; stroke:#0c0; stroke-width:1; opacity:0.5"/>
                            </g>
                        </g>
                    <rect x="189" y="50" width="2" height="40" style="fill: #111111; stroke:#0c0; stroke-width:1"/>
                    <polygon points="9,80 30,40 31,41 10,81" style="fill: #0c0; stroke:#0c0; stroke-width:1"/>
                    <rect x="20" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>
                    <rect x="80" y="10" width="40" height="10" style="fill:#111111; stroke:#0c0;"/>`
            }
        },
        bedroom_hallway: { name: "bedroom hallway", visited: false },
        kitchen: { name: "kitchen", visited: false },
        living_room: { name: "living room", visited: false },
        court_yard: { name: "court yard", visited: false },
        servants_quarters: { name: `servant's quarters`, visited: false },
    },
    set_current_location: function(new_location){
        this.current_location = new_location;
    },
}
const minimap = {
    minimap: document.getElementById("minimap"),
    draw_minimap: function(minimap_image){
        minimap.minimap.innerHTML = minimap_image;
    }
}
const descriptions =  {
    look_description: {
        home: {
            my_room: {
                look: ["You are in a room about 15' by 10', with a queen sized bed in the corner.\n", 
                "There is a window by the bed, large enough for you to climb through if need be, but you don't see a reason for doing that.\n",
                "There is a door fixed in the wall opposite the window.\n", 
                "There are two book selves in the room lining the wall to the right of the door.\n"],
                bed: "It is a queen sized bed, quite large for one person. There are bed sheets, quilts, blankets, and two pillows on the bed. The frame is made of finished oak.",
                window: "It is a rather large window, large enough for you to climb through if need be, but you don't see a reason for doing that.\n",
                door_unlocked_closed: "It is a wooden door, of the finest quality.\n The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.\n Upon further inspection, the door seems to be unlocked on the inside, your side.\n Everything seems good to go, door ready for doing what doors do best.\n Sitting there waiting to be opened.\n",
                door_locked_closed: "It is a wooden door, of the finest quality.\n The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.\n The door is closed.\n Upon further inspection, the door seems to be locked on the inside, your side.\n Hopefully you didn't try opening the door before unlocking it.\n That would be embarrassing...\n",
                door_unlocked_opened: "It is a wooden door, of the finest quality.\n The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.\n Upon further inspection, the door seems to be unlocked on the inside, your side.\n Everything seems good to go, the door is open, just head on through.\n",
                door_closed_message: "Where are you trying to go? The door is closed!\n",
                items: {
                    pillow: "It's the pillow from your bed, pretty soft.\n Hope that's drool on there.\n",
                    quilt: "It's an elaborate quilt, of the finest quality.\n You can tell that there has been some love put into this quilt.\n",
                    blanket: "This is one of the blankets from your bed.\n Still warm.\n Nice.\n"
                }
            },
            bedroom_hallway:{
                look: "You are in a hallway connecting your room with a series of other rooms.\n There are several doors, one across the way from your room to the west, and one at either end of the hall, north and south respectively.\n"
            },
            living_room:{
                look: "You are standing in a rather large space, much larger than your room. This is the living room. There is a fireplace set within the wall to the east, an archway leading towards the smell of food to the west, and a hallway to the south.\n",
                items:{
                    bag: "\nYou can put stuff in here!\n"
                }
            }
        }
    },
    action_description: {
        home:{
            my_room:{
                open:{
                    door_locked: "You try to open the door by turning knob and pulling.\ It won't budge an inch.\n",
                    door_unlocked: "You try to open the door by turning the knob and pulling.\ It swings open easily.\n"
                },
                unlock:{
                    unlock_door: "\nYou hear a click as you turn the lock to unlock the door."
                },
                take:{
                    pillow: "\nYou take one of the pillows from your bed.\n",
                    blanket: "\nYou can't take that when you don't have anything to put it in.\n",
                    quilt: "\nYou can't take that when you don't have anything to put it in.\n",
                    bag:{
                        blanket: "\nYou put one of the blankets from your bed into you bag.\n",
                        quilt: "\nYou put the quilt from your bed into you bag.\n"
                    }
                }
            }
        }
    }
};
const story_dialogue = {
    home: {
        start:["As the sunlight from mid-morning peeks over the mountains and through the window, your eyes open. You are lying on a bed in a decently sized room.\n", 
        "This is your home.\n", "You fell asleep last night after putting your younger siblings to bed, and now you awaken from your sleep, just the same as every other day.\n", 
        "You've never had mountains even remotely near your house, and yet there they are, standing resolutely, unmoving, real.\n", 
        "\"Where am I?\"\n"]
    }
};
const scenes = {
    scene: {
        home: {
            my_room:{
                look: descriptions.look_description.home.my_room.look,
                bed: "bed",
                door: "door",
                window: "window",
                door_unlocked: false,
                door_open: false,
                items:{
                    pillow: "pillow",
                    quilt: "quilt",
                    blanket: "blanket"
                }
            },
            kitchen:{
                look: descriptions.look_description.home.kitchen
            },
            bedroom_hallway:{
                look: descriptions.look_description.home.bedroom_hallway.look
            },
            living_room:{
                look: descriptions.look_description.home.living_room.look
            }
        }
    },
};
const actions = {
    look: "look",
    open: "open",
    attack: "attack",
    talk: "talk",
    take: "take",
    unlock: "unlock",
    grab: "grab",
    push: "push",
    investigation:{
        search: "search",
        examine: "examine"
    },
    movement: {
        move: "move",
        go:"go",
        leave: "leave",
        run: "run"
    },
    joining: {
        at: "at",
        to: "to",
        through: "through"
    }
};
const inventory = {
    pillow: {
        name: "pillow",
        taken: false,
        description: descriptions.look_description.home.my_room.items.pillow
    },
    blanket:{
        name: "blanket",
        taken: false,
        description: descriptions.look_description.home.my_room.items.blanket
    },
    quilt:{
        name: "quilt",
        taken: false,
        description: descriptions.look_description.home.my_room.items.quilt
    },
    bag:{
        name: "bag",
        taken: false,
        description: descriptions.look_description.home.living_room.items.bag
    }
};
function checkInput(){
    var text_input = document.getElementById("text-input");
    var input = text_input.value.split(" ");
    var description = document.getElementById("scene-description");
    var inventory_list = document.getElementById("inventory");
    var command_history = document.getElementById("command-history");
    switch(input[0]){
        case actions.look || "Look":{
        switch(locations.current_location){
            case locations.home.my_room:{
                description.innerText = "";
                switch(input[1]){
                    case actions.joining.at:{
                        console.log(input[1]);
                        if(input[2] == scenes.scene.home.my_room.bed){
                            console.log(input[2]);
                            description.innerText = descriptions.look_description.home.my_room.bed;
                            break;
                        } else if (input[2] == scenes.scene.home.my_room.door && scenes.scene.home.my_room.door){
                            if(scenes.scene.home.my_room.door_unlocked == false && scenes.scene.home.my_room.door_open == false){
                                description.innerText = descriptions.look_description.home.my_room.door_locked_closed;
                            } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == false){
                                description.innerText = descriptions.look_description.home.my_room.door_unlocked_closed;
                            } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == true){
                                description.innerText = descriptions.look_description.home.my_room.door_unlocked_opened;
                            }
                            break;
                        } else if(input[2] == scenes.scene.home.my_room.window){
                            description.innerText = descriptions.look_description.home.my_room.window;
                            break;
                        } else {
                            description.innerText = "Nothing to look at.";
                            console.log(input[2]);
                            break;
                        }
                    }
                    case locations.current_room:{
                        for(let i = 0; i < descriptions.look_description.home.my_room.look.length; i++){
                            description.innerText += descriptions.look_description.home.my_room.look[i];
                        };
                        break;
                    }
                    case scenes.scene.home.my_room.window:{
                        description.innerText = descriptions.look_description.home.my_room.window;
                        break;
                    }
                    case scenes.scene.home.my_room.bed:{
                        description.innerText = descriptions.look_description.home.my_room.bed;
                        break;
                    }
                    case scenes.scene.home.my_room.door:{
                        if(scenes.scene.home.my_room.door_unlocked == false){
                            description.innerText = descriptions.look_description.home.my_room.door_locked_closed;
                        } else if (scenes.scene.home.my_room.door_unlocked == true){
                            description.innerText = descriptions.look_description.home.my_room.door_unlocked_closed;
                        }
                        break;
                    }
                    default:{
                        description.innerText = "Look at what?";
                    }
                }
                break;
            }
            case locations.home.bedroom_hallway:{
                description.innerText = "";
                switch(input[1]){
                    case locations.current_room:{
                        description.innerText = descriptions.look_description.home.bedroom_hallway.look;
                        break;
                    }
                    default:{
                        description.innerText = "Look where?";
                    }
                }
                break;
            }
            case locations.home.living_room:{
                description.innerText = "";
                switch(input[1]){
                    case locations.current_room:{
                        description.innerText = descriptions.look_description.home.living_room.look;
                        break;
                    }
                    default:{
                        description.innerText = "Look where?";
                    }
                }
                break;
            }
            case locations.home.kitchen:{
                break;
            }
        }
        break;
        }
        case actions.open || "Open":{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door:{
                            if(scenes.scene.home.my_room.door_unlocked == false){
                                description.innerText = descriptions.action_description.home.my_room.open.door_locked;
                            } else if(scenes.scene.home.my_room.door_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == false && inventory.blanket.taken == false){
                                description.innerText = descriptions.action_description.home.my_room.open.door_unlocked;
                                scenes.scene.home.my_room.door_open = true;
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_quilt_blanket);
                            } else if (scenes.scene.home.my_room.door_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == true && inventory.blanket.taken == false){
                                description.innerText = descriptions.action_description.home.my_room.open.door_unlocked;
                                scenes.scene.home.my_room.door_open = true;
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt_blanket);
                            }
                            break;
                        }
                        default:{
                            description.innerText += "Open what?";
                        }
                    }
                    break;
                }
            }
            break;
        }
        case actions.take || "Take":{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.items.pillow:{
                            if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == false && scenes.scene.home.my_room.door_open == true){
                                description.innerText += descriptions.action_description.home.my_room.take.pillow;
                                inventory.pillow.taken = true;
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt_blanket)
                                let newItem = document.createElement("li");
                                let newNode = document.createTextNode("Pillow");
                                newItem.appendChild(newNode);
                                inventory_list.appendChild(newItem);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == false && scenes.scene.home.my_room.door_open == false){
                                description.innerText += descriptions.action_description.home.my_room.take.pillow;
                                inventory.pillow.taken = true;
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_closed_with_quilt_blanket)
                                let newItem = document.createElement("li");
                                let newNode = document.createTextNode("Pillow");
                                newItem.appendChild(newNode);
                                inventory_list.appendChild(newItem);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == false && scenes.scene.home.my_room.door_open == false){
                                
                            }
                            else {
                                description.innerText += "\nYou've already taken this item.\n";
                            }
                            break;
                        }
                        case scenes.scene.home.my_room.items.quilt:{
                            if(inventory.quilt.taken == false && inventory.bag.taken == true){
                                description.innerText += descriptions.action_description.home.my_room.take.quilt;
                                inventory.quilt.taken = true;
                                let newItem = document.createElement("li");
                                let newNode = document.createTextNode("Quilt");
                                newItem.appendChild(newNode);
                                inventory_list.appendChild(newItem);
                            } else if(inventory.quilt.taken == false && inventory.bag.taken == false){
                                description.innerText += descriptions.action_description.home.my_room.take.quilt;
                            } else {
                                description.innerText += "\nYou've already taken this item.\n";
                            }
                            break;
                        }
                        case scenes.scene.home.my_room.items.blanket:{
                            if(inventory.blanket.taken == false && inventory.bag.taken == true){
                                description.innerText += descriptions.action_description.home.my_room.take.blanket;
                                inventory.blanket.taken = true;
                                let newItem = document.createElement("li");
                                let newNode = document.createTextNode("Blanket");
                                newItem.appendChild(newNode);
                                inventory_list.appendChild(newItem);
                            } else if(inventory.blanket.taken == false && inventory.bag.taken == false){
                                description.innerText += descriptions.action_description.home.my_room.take.blanket;
                            } else {
                                description.innerText += "\nYou've already taken this item.\n";
                            }
                            break;
                        }
                        default:{
                            description.innerText += "\nThere's nothing there to take.\n";
                        }
                    }
                }
            }
            break;
        }
        case actions.unlock || "Unlock":{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door:{
                            description.innerText += descriptions.action_description.home.my_room.unlock.unlock_door;
                            scenes.scene.home.my_room.door_unlocked = true;
                            break;
                        }
                        default:{
                            description.innerText += "Unlock what?";
                        }
                    }
                    break;
                }
            }
        break;
        }
        case actions.movement.go || "Go":{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door:{
                            if(scenes.scene.home.my_room.door_open == true){
                                locations.set_current_location(locations.home.bedroom_hallway);
                                locations.home.bedroom_hallway.visited = true;
                                description.innerText = descriptions.look_description.home.bedroom_hallway.look;
                                console.log(locations.home.bedroom_hallway.visited);
                                break;
                            } else if (scenes.scene.home.my_room.door_open == false){
                                description.innerText = descriptions.look_description.home.my_room.door_closed_message;
                                console.log("I am running");
                                break;
                            }
                        }
                        default:{
                            description.innerText = "Go where?";
                        }
                    }
                    break;
                }
            }
            break;
        }
        default:{
            description.innerText += "\n" + text_input.value + " is an invalid command";
        }
    }
    command_history.innerText += text_input.value + "\n";
    text_input.value = "";
};
document.getElementById("text-input").addEventListener("keyup", function(e){e.preventDefault(); if(e.keyCode === 13){ checkInput(); }; });
document.getElementById("enter-button").addEventListener("click", checkInput);
window.addEventListener("load", () => { 
    for(let i = 0; i < story_dialogue.home.start.length; i++){
        document.getElementById("scene-description").innerText += story_dialogue.home.start[i].toString();
    }
    if(scenes.scene.home.my_room.door_open == false && scenes.scene.home.my_room.door_unlocked == false && inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == false){
        minimap.draw_minimap(locations.home.my_room.minimap_image.door_closed_with_pillow_quilt_blanket);
    }
    locations.current_location = locations.home.my_room; 
});