
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        { message_designator: "A659", message_short_name: "ATO", message_long_name: "Air Tasking Order" },
        { message_designator: "A661", message_short_name: "REQSTATASK", message_long_name: "Air Mission Request Status/Tasking" },
        { message_designator: "B220", message_short_name: "AFU.FUS", message_long_name: "Ammunition Fire Unit - Fire Unit Status" },
        { message_designator: "C121", message_short_name: "TACELINT", message_long_name: "Tactical ELINT Report" },
        { message_designator: "C130", message_short_name: "MISREP", message_long_name: "Mission Report" },
        { message_designator: "C241", message_short_name: "AFU.MFR", message_long_name: "Ammunition Fire Unit - Mission Fired Report" },
        { message_designator: "C281", message_short_name: "ATI.ATR", message_long_name: "Artillery Target Intelligence - Artillery Target Report" },
        { message_designator: "D210", message_short_name: "FM.CFF", message_long_name: "Fire Mission - Call for Fire" },
        { message_designator: "D281", message_short_name: "ATI.TCRIT", message_long_name: "Artillery Target Intelligence - Target Criteria" },
        { message_designator: "D670", message_short_name: "AIRSUPREQ", message_long_name: "Air Support Request" },
        { message_designator: "F002", message_short_name: "GENADMIN", message_long_name: "General Administration Message" },
        { message_designator: "F658", message_short_name: "ACMREQ", message_long_name: "Airspace Control Means Request" },
        { message_designator: "F756", message_short_name: "ACO", message_long_name: "Airspace Control Order" },
        { message_designator: "S201", message_short_name: "SPRT.GEOM", message_long_name: "Support Battlefield Geometry" },
        { message_designator: "S202", message_short_name: "FP.ATL", message_long_name: "Fire Planning - Artillery Target List" },
        { message_designator: "S305", message_short_name: "TIDAT", message_long_name: "Target Intelligence Data Message" },
        { message_designator: "S308", message_short_name: "ATI.IEWTC", message_long_name: "Artillery Target Intelligence - Intelligence & Electronic Warfare (IEW) Target Coordination Message" },
        { message_designator: "S309", message_short_name: "ENSIT", message_long_name: "Enemy Situational Awareness Message" },
        { message_designator: "S507", message_short_name: "RESOURCES", message_long_name: "Resource Report" }
      ]);
    });
};
