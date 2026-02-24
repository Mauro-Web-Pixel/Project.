function status(request, response) {
response.status(200).json({ "chave" : "json podem usar charset" })
}

export default status