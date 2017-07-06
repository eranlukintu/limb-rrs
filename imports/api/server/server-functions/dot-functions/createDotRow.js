import { Random } from "meteor/random";

export const createDrow = function(dRowArgs) {
    var dRow = {};
    dRow.dRowId = Random.id();       
    dRow.staticDstring = createNextTopLevelDstring();
    dRow.staticSortString = createSortString(dRow.staticDstring);
    dRow.staticIndentLevel = calculateIndentLevel(dRow.staticDstring);
    dRow.primaryId = Random.id();
    dRow.primaryLabel = "DRow";
    dRow.secondaryId = "NA";
    dRow.secondaryLabel = "has auto label";
    dRow.tertiaryId = Random.id();
    dRow.tertiaryLabel = "DRow " + dRow.dRowId;
    // console.log(dRow);
    return dRow;
  }
