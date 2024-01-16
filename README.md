# 171Group14
Project for 171 - Group 14

#NOTE: For our ipynb project file, you need to launch it in Google CoLab. If you run it in Jupyter Notebooks, inconsistencies in package versions can cause issues which might stop the file from running. PLEASE use Google CoLab to run project.ipynb :)

To run our project, you will need to launch a Flask server before you launch our website. Please make sure to view our code in VS Code, if you don't have it already installed, here is a link to how you can do so: [https://code.visualstudio.com/download](url).

If you're familiar with GitHub, please clone our repository. If not, please install GitHub Desktop from this link: [https://desktop.github.com/](url). Return to the GitHub repository home page and click on the green 'Code' button and then 'Open with GitHub Desktop'. Once the GitHub Desktop page opens up, please click on 'Open with Visual Studio Code'. 

After opening our project, navigate to the 171-project folder and open the terminal. On a Mac, type Command+j to open the terminal window. If you're on another device
or the terminal window doesn't show, select 'Terminal' in the top left corner of your laptop screen. In the drop-down list, select 'New Terminal' and navigate to the terminal window. 
Verify that your starting directory is in 'website-code', you can type 'cd website-code' if you're in the website code's folder.

For our project, we need to run a flask server to interact with the model that we created. However, there are some packages that you need to have installed before you can do anything. Please make sure that you have at least 1 GB of space on your machine, this can take up a lot of space. In this terminal, please run 'pip install tensorflow==2.14'. Once that is successful, please run 'pip install flask' and 'pip install flask-cors'. Now, you can type 'python -m flask --app ./src/model_runner.py run' into the terminal and hit 'Enter' to launch the server.

After this, we need to create a new terminal window by selecting the '+' sign at the top of the terminal pop-up window. To clarify, it should be in the same line as the one that says 'Terminal'. Now, you should see a brand new terminal instance. Verify that you're still in the 'website-code' folder, you can use the steps mentioned earlier to navigate to it if you're not there already. Please type in 'brew install npm'. If you don't have vite either, please run 'npm install --save-dev vite' for Mac or afterward. 

Once you're in the correct directory (aka. folder) and have npm installed, type in 'npm run dev' and hit 'Enter'. This should return a link to a website on localhost, please launch the link. 

On the website, select 'Choose File' and navigate to the 'website-code' folder on your machine. We already have a test image prepared for you so you can select 'test.jpg'. Once selected, you should be returned to the home page of our website and you should see the classification that the model predicted rendered under the image. 

If you have any issues whatsoever regarding installs or versions, please reach out to me (draj@ucdavis.edu) and I'll be happy to help :)
