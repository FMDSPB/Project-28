class Launcher {
    constructor(bodyA, pointB) {
        let options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 20
        }

        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    fly() {

        this.body.bodyA = null;

    }

    attach(a) {

        this.body.bodyA = a;

    }
}