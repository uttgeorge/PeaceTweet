import logging
import json
import azure.functions as func
# Import helper script
from .predict import sentence_prediction

def main(req: func.HttpRequest) -> func.HttpResponse:
    text_content = req.params.get('tweet')
    print(text_content)
    logging.info('Text URL received: ' + text_content)

    prediction, probabilities = sentence_prediction(text_content)

    headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }

    return func.HttpResponse(json.dumps({'prediction':prediction, 'probabilities':probabilities }), headers = headers)
