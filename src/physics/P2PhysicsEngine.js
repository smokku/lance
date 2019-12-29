import PhysicsEngine from './PhysicsEngine';
import p2 from 'p2';

/**
 * CannonPhysicsEngine is a three-dimensional lightweight physics engine
 */
class P2PhysicsEngine extends PhysicsEngine {

    constructor(options) {
        super(options);

        this.options.dt = this.options.dt || (1 / 60);
        this.world = new p2.World({ gravity: [0, 0] });
        this.p2 = p2;
    }

    // entry point for a single step of the Simple Physics
    step(dt, objectFilter) {
        this.world.step(dt || this.options.dt);
    }

    // add objects to the world:
    // create a body, add shape, add to world

    addBox(width, height, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Box({ width, height }));
        this.world.addBody(body);
        return body;
    }

    addCapsule(length, radius, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Capsule({ length, radius }));
        this.world.addBody(body);
        return body;
    }

    addCircle(radius, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Circle({ radius }));
        this.world.addBody(body);
        return body;
    }

    addConvex(vertices, axes, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Convex({ vertices, axes }));
        this.world.addBody(body);
        return body;
    }

    addHeightfield(heights, minValue, maxValue, elementWidth, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Heightfield({ heights, minValue, maxValue, elementWidth }));
        this.world.addBody(body);
        return body;
    }

    addLine(length, mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Line({ length }));
        this.world.addBody(body);
        return body;
    }

    addParticle(mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Particle({}));
        this.world.addBody(body);
        return body;
    }

    addPlane(mass) {
        let body = new p2.Body({ mass, position: [0, 0] });
        body.addShape(new p2.Plane({}));
        this.world.addBody(body);
        return body;
    }

    removeObject(obj) {
        this.world.removeBody(obj);
    }
}

export default P2PhysicsEngine;
