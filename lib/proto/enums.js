"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Version;
(function (Version) {
    Version[Version["V0_1"] = 1063369270] = "V0_1";
    Version[Version["V0_2"] = 1915781601] = "V0_2";
    Version[Version["V0_3"] = 1601562686] = "V0_3";
    Version[Version["V0_4"] = 1074539808] = "V0_4";
    Version[Version["V1_0"] = 885177795] = "V1_0";
})(Version = exports.Version || (exports.Version = {}));
var Protocol;
(function (Protocol) {
    Protocol[Protocol["PROTOBUF"] = 656407617] = "PROTOBUF";
    Protocol[Protocol["JSON"] = 2120839367] = "JSON";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var QueryType;
(function (QueryType) {
    QueryType[QueryType["START"] = 1] = "START";
    QueryType[QueryType["CONTINUE"] = 2] = "CONTINUE";
    QueryType[QueryType["STOP"] = 3] = "STOP";
    QueryType[QueryType["NOREPLY_WAIT"] = 4] = "NOREPLY_WAIT";
    QueryType[QueryType["SERVER_INFO"] = 5] = "SERVER_INFO";
})(QueryType = exports.QueryType || (exports.QueryType = {}));
var FrameType;
(function (FrameType) {
    FrameType[FrameType["POS"] = 1] = "POS";
    FrameType[FrameType["OPT"] = 2] = "OPT";
})(FrameType = exports.FrameType || (exports.FrameType = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS_ATOM"] = 1] = "SUCCESS_ATOM";
    ResponseType[ResponseType["SUCCESS_SEQUENCE"] = 2] = "SUCCESS_SEQUENCE";
    ResponseType[ResponseType["SUCCESS_PARTIAL"] = 3] = "SUCCESS_PARTIAL";
    ResponseType[ResponseType["WAIT_COMPLETE"] = 4] = "WAIT_COMPLETE";
    ResponseType[ResponseType["SERVER_INFO"] = 5] = "SERVER_INFO";
    ResponseType[ResponseType["CLIENT_ERROR"] = 16] = "CLIENT_ERROR";
    ResponseType[ResponseType["COMPILE_ERROR"] = 17] = "COMPILE_ERROR";
    ResponseType[ResponseType["RUNTIME_ERROR"] = 18] = "RUNTIME_ERROR";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["INTERNAL"] = 1000000] = "INTERNAL";
    ErrorType[ErrorType["RESOURCE_LIMIT"] = 2000000] = "RESOURCE_LIMIT";
    ErrorType[ErrorType["QUERY_LOGIC"] = 3000000] = "QUERY_LOGIC";
    ErrorType[ErrorType["NON_EXISTENCE"] = 3100000] = "NON_EXISTENCE";
    ErrorType[ErrorType["OP_FAILED"] = 4100000] = "OP_FAILED";
    ErrorType[ErrorType["OP_INDETERMINATE"] = 4200000] = "OP_INDETERMINATE";
    ErrorType[ErrorType["USER"] = 5000000] = "USER";
    ErrorType[ErrorType["PERMISSION_ERROR"] = 6000000] = "PERMISSION_ERROR";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var ResponseNote;
(function (ResponseNote) {
    ResponseNote[ResponseNote["SEQUENCE_FEED"] = 1] = "SEQUENCE_FEED";
    ResponseNote[ResponseNote["ATOM_FEED"] = 2] = "ATOM_FEED";
    ResponseNote[ResponseNote["ORDER_BY_LIMIT_FEED"] = 3] = "ORDER_BY_LIMIT_FEED";
    ResponseNote[ResponseNote["UNIONED_FEED"] = 4] = "UNIONED_FEED";
    ResponseNote[ResponseNote["INCLUDES_STATES"] = 5] = "INCLUDES_STATES";
})(ResponseNote = exports.ResponseNote || (exports.ResponseNote = {}));
var DatumType;
(function (DatumType) {
    DatumType[DatumType["R_NULL"] = 1] = "R_NULL";
    DatumType[DatumType["R_BOOL"] = 2] = "R_BOOL";
    DatumType[DatumType["R_NUM"] = 3] = "R_NUM";
    DatumType[DatumType["R_STR"] = 4] = "R_STR";
    DatumType[DatumType["R_ARRAY"] = 5] = "R_ARRAY";
    DatumType[DatumType["R_OBJECT"] = 6] = "R_OBJECT";
    DatumType[DatumType["R_JSON"] = 7] = "R_JSON";
})(DatumType = exports.DatumType || (exports.DatumType = {}));
var TermType;
(function (TermType) {
    TermType[TermType["DATUM"] = 1] = "DATUM";
    TermType[TermType["MAKE_ARRAY"] = 2] = "MAKE_ARRAY";
    TermType[TermType["MAKE_OBJ"] = 3] = "MAKE_OBJ";
    TermType[TermType["VAR"] = 10] = "VAR";
    TermType[TermType["JAVASCRIPT"] = 11] = "JAVASCRIPT";
    TermType[TermType["UUID"] = 169] = "UUID";
    TermType[TermType["HTTP"] = 153] = "HTTP";
    TermType[TermType["ERROR"] = 12] = "ERROR";
    TermType[TermType["IMPLICIT_VAR"] = 13] = "IMPLICIT_VAR";
    TermType[TermType["DB"] = 14] = "DB";
    TermType[TermType["TABLE"] = 15] = "TABLE";
    TermType[TermType["GET"] = 16] = "GET";
    TermType[TermType["GET_ALL"] = 78] = "GET_ALL";
    TermType[TermType["EQ"] = 17] = "EQ";
    TermType[TermType["NE"] = 18] = "NE";
    TermType[TermType["LT"] = 19] = "LT";
    TermType[TermType["LE"] = 20] = "LE";
    TermType[TermType["GT"] = 21] = "GT";
    TermType[TermType["GE"] = 22] = "GE";
    TermType[TermType["NOT"] = 23] = "NOT";
    TermType[TermType["ADD"] = 24] = "ADD";
    TermType[TermType["SUB"] = 25] = "SUB";
    TermType[TermType["MUL"] = 26] = "MUL";
    TermType[TermType["DIV"] = 27] = "DIV";
    TermType[TermType["MOD"] = 28] = "MOD";
    TermType[TermType["FLOOR"] = 183] = "FLOOR";
    TermType[TermType["CEIL"] = 184] = "CEIL";
    TermType[TermType["ROUND"] = 185] = "ROUND";
    TermType[TermType["APPEND"] = 29] = "APPEND";
    TermType[TermType["PREPEND"] = 80] = "PREPEND";
    TermType[TermType["DIFFERENCE"] = 95] = "DIFFERENCE";
    TermType[TermType["SET_INSERT"] = 88] = "SET_INSERT";
    TermType[TermType["SET_INTERSECTION"] = 89] = "SET_INTERSECTION";
    TermType[TermType["SET_UNION"] = 90] = "SET_UNION";
    TermType[TermType["SET_DIFFERENCE"] = 91] = "SET_DIFFERENCE";
    TermType[TermType["SLICE"] = 30] = "SLICE";
    TermType[TermType["SKIP"] = 70] = "SKIP";
    TermType[TermType["LIMIT"] = 71] = "LIMIT";
    TermType[TermType["OFFSETS_OF"] = 87] = "OFFSETS_OF";
    TermType[TermType["CONTAINS"] = 93] = "CONTAINS";
    TermType[TermType["GET_FIELD"] = 31] = "GET_FIELD";
    TermType[TermType["KEYS"] = 94] = "KEYS";
    TermType[TermType["VALUES"] = 186] = "VALUES";
    TermType[TermType["OBJECT"] = 143] = "OBJECT";
    TermType[TermType["HAS_FIELDS"] = 32] = "HAS_FIELDS";
    TermType[TermType["WITH_FIELDS"] = 96] = "WITH_FIELDS";
    TermType[TermType["PLUCK"] = 33] = "PLUCK";
    TermType[TermType["WITHOUT"] = 34] = "WITHOUT";
    TermType[TermType["MERGE"] = 35] = "MERGE";
    TermType[TermType["BETWEEN_DEPRECATED"] = 36] = "BETWEEN_DEPRECATED";
    TermType[TermType["BETWEEN"] = 182] = "BETWEEN";
    TermType[TermType["REDUCE"] = 37] = "REDUCE";
    TermType[TermType["MAP"] = 38] = "MAP";
    TermType[TermType["FOLD"] = 187] = "FOLD";
    TermType[TermType["FILTER"] = 39] = "FILTER";
    TermType[TermType["CONCAT_MAP"] = 40] = "CONCAT_MAP";
    TermType[TermType["ORDER_BY"] = 41] = "ORDER_BY";
    TermType[TermType["DISTINCT"] = 42] = "DISTINCT";
    TermType[TermType["COUNT"] = 43] = "COUNT";
    TermType[TermType["IS_EMPTY"] = 86] = "IS_EMPTY";
    TermType[TermType["UNION"] = 44] = "UNION";
    TermType[TermType["NTH"] = 45] = "NTH";
    TermType[TermType["BRACKET"] = 170] = "BRACKET";
    TermType[TermType["INNER_JOIN"] = 48] = "INNER_JOIN";
    TermType[TermType["OUTER_JOIN"] = 49] = "OUTER_JOIN";
    TermType[TermType["EQ_JOIN"] = 50] = "EQ_JOIN";
    TermType[TermType["ZIP"] = 72] = "ZIP";
    TermType[TermType["RANGE"] = 173] = "RANGE";
    TermType[TermType["INSERT_AT"] = 82] = "INSERT_AT";
    TermType[TermType["DELETE_AT"] = 83] = "DELETE_AT";
    TermType[TermType["CHANGE_AT"] = 84] = "CHANGE_AT";
    TermType[TermType["SPLICE_AT"] = 85] = "SPLICE_AT";
    TermType[TermType["COERCE_TO"] = 51] = "COERCE_TO";
    TermType[TermType["TYPE_OF"] = 52] = "TYPE_OF";
    TermType[TermType["UPDATE"] = 53] = "UPDATE";
    TermType[TermType["DELETE"] = 54] = "DELETE";
    TermType[TermType["REPLACE"] = 55] = "REPLACE";
    TermType[TermType["INSERT"] = 56] = "INSERT";
    TermType[TermType["DB_CREATE"] = 57] = "DB_CREATE";
    TermType[TermType["DB_DROP"] = 58] = "DB_DROP";
    TermType[TermType["DB_LIST"] = 59] = "DB_LIST";
    TermType[TermType["TABLE_CREATE"] = 60] = "TABLE_CREATE";
    TermType[TermType["TABLE_DROP"] = 61] = "TABLE_DROP";
    TermType[TermType["TABLE_LIST"] = 62] = "TABLE_LIST";
    TermType[TermType["CONFIG"] = 174] = "CONFIG";
    TermType[TermType["STATUS"] = 175] = "STATUS";
    TermType[TermType["WAIT"] = 177] = "WAIT";
    TermType[TermType["RECONFIGURE"] = 176] = "RECONFIGURE";
    TermType[TermType["REBALANCE"] = 179] = "REBALANCE";
    TermType[TermType["SYNC"] = 138] = "SYNC";
    TermType[TermType["GRANT"] = 188] = "GRANT";
    TermType[TermType["INDEX_CREATE"] = 75] = "INDEX_CREATE";
    TermType[TermType["INDEX_DROP"] = 76] = "INDEX_DROP";
    TermType[TermType["INDEX_LIST"] = 77] = "INDEX_LIST";
    TermType[TermType["INDEX_STATUS"] = 139] = "INDEX_STATUS";
    TermType[TermType["INDEX_WAIT"] = 140] = "INDEX_WAIT";
    TermType[TermType["INDEX_RENAME"] = 156] = "INDEX_RENAME";
    TermType[TermType["SET_WRITE_HOOK"] = 189] = "SET_WRITE_HOOK";
    TermType[TermType["GET_WRITE_HOOK"] = 190] = "GET_WRITE_HOOK";
    TermType[TermType["FUNCALL"] = 64] = "FUNCALL";
    TermType[TermType["BRANCH"] = 65] = "BRANCH";
    TermType[TermType["OR"] = 66] = "OR";
    TermType[TermType["AND"] = 67] = "AND";
    TermType[TermType["FOR_EACH"] = 68] = "FOR_EACH";
    TermType[TermType["FUNC"] = 69] = "FUNC";
    TermType[TermType["ASC"] = 73] = "ASC";
    TermType[TermType["DESC"] = 74] = "DESC";
    TermType[TermType["INFO"] = 79] = "INFO";
    TermType[TermType["MATCH"] = 97] = "MATCH";
    TermType[TermType["UPCASE"] = 141] = "UPCASE";
    TermType[TermType["DOWNCASE"] = 142] = "DOWNCASE";
    TermType[TermType["SAMPLE"] = 81] = "SAMPLE";
    TermType[TermType["DEFAULT"] = 92] = "DEFAULT";
    TermType[TermType["JSON"] = 98] = "JSON";
    TermType[TermType["ISO8601"] = 99] = "ISO8601";
    TermType[TermType["TO_ISO8601"] = 100] = "TO_ISO8601";
    TermType[TermType["EPOCH_TIME"] = 101] = "EPOCH_TIME";
    TermType[TermType["TO_EPOCH_TIME"] = 102] = "TO_EPOCH_TIME";
    TermType[TermType["NOW"] = 103] = "NOW";
    TermType[TermType["IN_TIMEZONE"] = 104] = "IN_TIMEZONE";
    TermType[TermType["DURING"] = 105] = "DURING";
    TermType[TermType["DATE"] = 106] = "DATE";
    TermType[TermType["TIME_OF_DAY"] = 126] = "TIME_OF_DAY";
    TermType[TermType["TIMEZONE"] = 127] = "TIMEZONE";
    TermType[TermType["YEAR"] = 128] = "YEAR";
    TermType[TermType["MONTH"] = 129] = "MONTH";
    TermType[TermType["DAY"] = 130] = "DAY";
    TermType[TermType["DAY_OF_WEEK"] = 131] = "DAY_OF_WEEK";
    TermType[TermType["DAY_OF_YEAR"] = 132] = "DAY_OF_YEAR";
    TermType[TermType["HOURS"] = 133] = "HOURS";
    TermType[TermType["MINUTES"] = 134] = "MINUTES";
    TermType[TermType["SECONDS"] = 135] = "SECONDS";
    TermType[TermType["TIME"] = 136] = "TIME";
    TermType[TermType["MONDAY"] = 107] = "MONDAY";
    TermType[TermType["TUESDAY"] = 108] = "TUESDAY";
    TermType[TermType["WEDNESDAY"] = 109] = "WEDNESDAY";
    TermType[TermType["THURSDAY"] = 110] = "THURSDAY";
    TermType[TermType["FRIDAY"] = 111] = "FRIDAY";
    TermType[TermType["SATURDAY"] = 112] = "SATURDAY";
    TermType[TermType["SUNDAY"] = 113] = "SUNDAY";
    TermType[TermType["JANUARY"] = 114] = "JANUARY";
    TermType[TermType["FEBRUARY"] = 115] = "FEBRUARY";
    TermType[TermType["MARCH"] = 116] = "MARCH";
    TermType[TermType["APRIL"] = 117] = "APRIL";
    TermType[TermType["MAY"] = 118] = "MAY";
    TermType[TermType["JUNE"] = 119] = "JUNE";
    TermType[TermType["JULY"] = 120] = "JULY";
    TermType[TermType["AUGUST"] = 121] = "AUGUST";
    TermType[TermType["SEPTEMBER"] = 122] = "SEPTEMBER";
    TermType[TermType["OCTOBER"] = 123] = "OCTOBER";
    TermType[TermType["NOVEMBER"] = 124] = "NOVEMBER";
    TermType[TermType["DECEMBER"] = 125] = "DECEMBER";
    TermType[TermType["LITERAL"] = 137] = "LITERAL";
    TermType[TermType["GROUP"] = 144] = "GROUP";
    TermType[TermType["SUM"] = 145] = "SUM";
    TermType[TermType["AVG"] = 146] = "AVG";
    TermType[TermType["MIN"] = 147] = "MIN";
    TermType[TermType["MAX"] = 148] = "MAX";
    TermType[TermType["SPLIT"] = 149] = "SPLIT";
    TermType[TermType["UNGROUP"] = 150] = "UNGROUP";
    TermType[TermType["RANDOM"] = 151] = "RANDOM";
    TermType[TermType["CHANGES"] = 152] = "CHANGES";
    TermType[TermType["ARGS"] = 154] = "ARGS";
    TermType[TermType["BINARY"] = 155] = "BINARY";
    TermType[TermType["GEOJSON"] = 157] = "GEOJSON";
    TermType[TermType["TO_GEOJSON"] = 158] = "TO_GEOJSON";
    TermType[TermType["POINT"] = 159] = "POINT";
    TermType[TermType["LINE"] = 160] = "LINE";
    TermType[TermType["POLYGON"] = 161] = "POLYGON";
    TermType[TermType["DISTANCE"] = 162] = "DISTANCE";
    TermType[TermType["INTERSECTS"] = 163] = "INTERSECTS";
    TermType[TermType["INCLUDES"] = 164] = "INCLUDES";
    TermType[TermType["CIRCLE"] = 165] = "CIRCLE";
    TermType[TermType["GET_INTERSECTING"] = 166] = "GET_INTERSECTING";
    TermType[TermType["FILL"] = 167] = "FILL";
    TermType[TermType["GET_NEAREST"] = 168] = "GET_NEAREST";
    TermType[TermType["POLYGON_SUB"] = 171] = "POLYGON_SUB";
    TermType[TermType["TO_JSON_STRING"] = 172] = "TO_JSON_STRING";
    TermType[TermType["MINVAL"] = 180] = "MINVAL";
    TermType[TermType["MAXVAL"] = 181] = "MAXVAL";
    TermType[TermType["BIT_AND"] = 191] = "BIT_AND";
    TermType[TermType["BIT_OR"] = 192] = "BIT_OR";
    TermType[TermType["BIT_XOR"] = 193] = "BIT_XOR";
    TermType[TermType["BIT_NOT"] = 194] = "BIT_NOT";
    TermType[TermType["BIT_SAL"] = 195] = "BIT_SAL";
    TermType[TermType["BIT_SAR"] = 196] = "BIT_SAR";
})(TermType = exports.TermType || (exports.TermType = {}));