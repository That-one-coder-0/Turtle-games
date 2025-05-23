/*let engine = Matter.Engine.create();
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1920,
        height: 1080,
        wireframes: false,
        background : 'lightgreen'
    }
});


// objects to interact with
let stack = Matter.Composites.stack(300, 600, 4, 4, 0, 0, function(x, y) {
    return Matter.Bodies.polygon(x, y, 4, Matter.Common.random(20, 50),{
        render: {
            fillStyle: 'red',
            strokeStyle: 'black',
            lineWidth: 8
        }
    });
});
let circle = Matter.Bodies.circle(700, 200, 50, {
    render: {
        fillStyle: 'green',
        strokeStyle: 'black',
        lineWidth: 8
    }
});


//platforms to jump on
let platform = Matter.Bodies.rectangle(300, 500, 500, 30, { isStatic: true });
let platform2 = Matter.Bodies.rectangle(700, 400, 500, 30, { isStatic: true });
let platform3 = Matter.Bodies.rectangle(300, 300, 500, 30, { isStatic: true });
let ground = Matter.Bodies.rectangle(render.options.width/2, render.options.height, render.options.width, 60, { 
    isStatic: true,
    render: {
        fillStyle: 'blue'
    }
});
let wall = Matter.Bodies.rectangle(0, render.options.height/2, 60, render.options.height, {
    isStatic: true,
    render: {
        fillStyle: 'blue'
    }
});
let roof = Matter.Bodies.rectangle(render.options.width/2, 0, render.options.width, 60, {
    isStatic: true,
    render: {
        fillStyle: 'blue'
    }
});
let wall2 = Matter.Bodies.rectangle(render.options.width, render.options.height/2, 60, render.options.height, {
    isStatic: true,
    render: {
        fillStyle: 'blue'
    }
});


//mouse interaction
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});
Matter.World.add(engine.world, [stack, ground, platform, platform2, platform3, wall,roof,wall2, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);
*/