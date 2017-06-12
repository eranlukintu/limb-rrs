import { createSortStringAtServer } from "./createSortStringAtServer.js";
import { Random } from 'meteor/random';

export const createRootItem = () => {
   const initialControllingDrow = createInitialControllingDrow();
   const initialPrincipalLabelDrow = createInitialPrincipalLabelDrow(initialControllingDrow);
   const initialItemTypeDrow = createInitialItemTypeDrow(initialControllingDrow);
    const initialDrows = [];
    initialDrows.push(initialControllingDrow);
    initialDrows.push(initialPrincipalLabelDrow);
    initialDrows.push(initialItemTypeDrow);
    return initialDrows;
}

const createInitialControllingDrow =() => {
   const initialControllingDrow = {};
   initialControllingDrow.title = "NA";
   initialControllingDrow.dRowId = Random.id();
   initialControllingDrow.batchId = "1";
   initialControllingDrow.sequenceId = "1";
   initialControllingDrow.staticDstring = "1";
   initialControllingDrow.staticIndentLevel = "0";
   initialControllingDrow.staticSortString = createSortStringAtServer("1");
   initialControllingDrow.primaryId = Random.id();
   initialControllingDrow.primaryLabel = "dRow";
   initialControllingDrow.secondaryId = Random.id();
   initialControllingDrow.secondaryLabel = "has auto label";
   initialControllingDrow.tertiaryId = Random.id();
   initialControllingDrow.tertiaryLabel = "root";

   return initialControllingDrow;
}

const createInitialPrincipalLabelDrow = (initialControllingDrow) => {
   const initialPrincipalLabelDrow = {};
   initialPrincipalLabelDrow.title = "NA";
   initialPrincipalLabelDrow.dRowId = Random.id();
   initialPrincipalLabelDrow.batchId = "1";
   initialPrincipalLabelDrow.sequenceId = "2";
   initialPrincipalLabelDrow.staticDstring = "1.1";
   initialPrincipalLabelDrow.staticIndentLevel = "1";
   initialPrincipalLabelDrow.staticSortString = createSortStringAtServer(initialPrincipalLabelDrow.staticDstring);
   initialPrincipalLabelDrow.primaryId = initialControllingDrow.dRowId;
   initialPrincipalLabelDrow.primaryLabel = "drow";
   initialPrincipalLabelDrow.secondaryId = Random.id();
   initialPrincipalLabelDrow.secondaryLabel = "has principal label";
   initialPrincipalLabelDrow.tertiaryId = Random.id();
   initialPrincipalLabelDrow.tertiaryLabel = "root";

   return initialPrincipalLabelDrow;
}

const createInitialItemTypeDrow = (initialControllingDrow) => {
   const initialItemTypeDrow = {};
   initialItemTypeDrow.title = "NA";
   initialItemTypeDrow.dRowId = Random.id();
   initialItemTypeDrow.batchId = "1";
   initialItemTypeDrow.sequenceId = "3";
   initialItemTypeDrow.staticDstring = "1.2";
   initialItemTypeDrow.staticIndentLevel = "1";
   initialItemTypeDrow.staticSortString = createSortStringAtServer(initialItemTypeDrow.staticDstring);;
   initialItemTypeDrow.primaryId = initialControllingDrow.dRowId;
   initialItemTypeDrow.primaryLabel = "drow";
   initialItemTypeDrow.secondaryId = Random.id();
   initialItemTypeDrow.secondaryLabel = "has item type";
   initialItemTypeDrow.tertiaryId = Random.id();
   initialItemTypeDrow.tertiaryLabel = "root";

   return initialItemTypeDrow;
}