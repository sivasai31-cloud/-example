from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import cv2

# Initialize Flask app
app = Flask(__name__)

# Load trained ML model
# (make sure model.h5 is in the same backend folder)
model = tf.keras.models.load_model("model.h5")

# Disease labels and treatments
disease_info = {
    0: {
        "name": "Healthy Plant",
        "treatment": "No treatment needed. Maintain proper watering and nutrients."
    },
    1: {
        "name": "Early Blight",
        "treatment": "Remove infected leaves and apply recommended fungicide."
    },
    2: {
        "name": "Late Blight",
        "treatment": "Use copper-based fungicide and avoid over-irrigation."
    }
}

# API route for prediction
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get image from frontend
        file = request.files["image"]

        # Convert image to OpenCV format
        img_array = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

        # Resize image to model input size
        img = cv2.resize(img, (64, 64))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        # Make prediction
        prediction = model.predict(img)
        class_id = int(np.argmax(prediction))

        # Get result
        result = disease_info[class_id]

        return jsonify({
            "disease": result["name"],
            "treatment": result["treatment"]
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)
