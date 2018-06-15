let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/index");
let should = chai.should();

chai.use(chaiHttp);

describe("/GET totalCost", () => {
  it("it should GET totalCost for Wednesday, June 20th", done => {
    chai
      .request(server)
      .get("/06/20/2018/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("string");
        res.body.should.be.eql("0.15");
        done();
      });
  });
});

describe("/GET totalCost", () => {
  it("it should GET totalCost for July", done => {
    chai
      .request(server)
      .get("/07/01/2018/31")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("string");
        res.body.should.be.eql("3.00");
        done();
      });
  });
});

describe("/GET totalCost", () => {
  it("it should NOT GET totalCost for dates in the past", done => {
    chai
      .request(server)
      .get("/07/01/2017/1")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("string");
        res.body.should.be.eql(
          "Bob should not be budgeting for dates in the past.."
        );
        done();
      });
  });
});
