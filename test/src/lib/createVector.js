const createVector = require('src/lib/createVector.js');

                test(Create 3D vector, async () => {
                    const result = await createVector(["1","2","3"]);
                    expect(result).toEqual({ x: 1, y: 2, z: 3 });
                })