describe("returnDate", function () {
  it("takes a day of the week and returns the next date", function () {
     returnDate("lunes").should.equal("7/14/2014");
    // returnDate("lunes").should.equal("8/4/2014");
  });
  it("if a user enters the current day, it returns the date for a week from that day", function(){
    returnDate("jueves").should.equal("7/17/2014");
  });
});

// describe("convertDay", function () {
//   it("take a day of the week and turns it into its corresponding 0-6 value", function () {
//     convertDay("lunes").should.equal(1);
//   });
// });

describe("datesInMonth", function() {
  it("takes a day of the week and a specific month and returns the dates of those days in the month", function () {
    datesInMonth("viernes","marzo").should.equal([7,14,21,28]);
  });
});
