# Real-Time Face Recognition Attendance System
<p align="center">
  <img src="./static/results/face-recognition.gif" alt="animated" />
</p>

# How to add 1 peason to recognize
### Step 1: Create a folder with the folder name being the name of the person
### Step 2: Add the person's photo in the folder
### Step 3: Move folder to additional-training-datasets folder
#### Example:

- |database
- ----|additional-training-datasets
- --------|name-person1
- --------|name-person2
- ----|face-datasets
- ----|full-training-datasets

### Step 4: Set up with Python >= 3.7
````
pip install -r requirements.txt
````
### Step 5: Run to add person
````
python train.py --is-add-user=True
````
### Step 6: Run recognize
````
python recognize.py
````
