import sql from "mssql/msnodesqlv8.js";
import config from "./config.js";

// Connect to database
const execQuery = async (queryStr) => {
  try {
    const pool = await sql.connect(config.sqlConfig);
    const result = pool.request().query(queryStr);
    // pool.close();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const execStoreProc = async (storeProc) => {
  try {
    const pool = await sql.connect(config.sqlConfig);
    const result = pool.request().execute(storeProc);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const select = async (queryStr) => {
  try {
    const result = await execQuery(queryStr);
    return result?.recordset;
  } catch (error) {
    console.log(error);
  }
};

const modify = async (queryStr) => {
  try {
    const result = await execQuery(queryStr);
    return result?.rowsAffected;
  } catch (error) {
    console.log(error);
  }
};

export { select, modify };
