import database from '../../../../infra/database.js';

async function status(request, response) {
  try {
    const result = await database.query('SELECT 1 as sum');
    response.status(200).json({ 
      chave: "json podem usar charset",
      sum: result.rows[0].sum 
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

export default status;
