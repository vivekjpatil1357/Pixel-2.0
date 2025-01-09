import pyautogui as p
import time
import external as E
import pyperclip

def formatCode():
    with p.hold("ctrl"):
        p.keyDown("alt")
        p.press("f")
        p.keyUp("alt")

def toFileExplorer():
    with p.hold("ctrl"):
        p.keyDown("shift")
        p.press("p")
        p.keyUp("shift")
    p.press("enter")


def solveError(query):
    with p.hold("ctrl"):
        p.press("a")
    with p.hold("ctrl"):
        p.press("c")
    p.press("left")
    prevcode=pyperclip.paste()
    f = open("backup.txt", "w")
    f.write(prevcode)
    f.close()   
    query = prevcode + "\n" + query
    print(query)
    x = E.chat(
        query=query
        + " return only code",
        chatStr="",
        prg=True,
    )
    print("got reply")
    toFileExplorer()
    with p.hold("shift"):
        p.keyDown("alt")
        p.press("c")
        p.keyUp("alt")
    filename = pyperclip.paste()
    f = open(filename, "w")
    print(filename)
    f.write(x)
    f.close()
    formatCode()

def writeCode(query):
    toFileExplorer()

    with p.hold("shift"):
        p.keyDown("alt")
        p.press("c")
        p.keyUp("alt")
    filename = pyperclip.paste()
    f = open(filename, "w")
    print(filename)
    x = E.chat(
        query=query
        + "give complete code only  no comments , no explanation , no output"
        + "filename is "
        + filename,
        chatStr="",
        prg=True,
    )
    f.write(x)
    f.close()
    formatCode()

def vscode(query):
    with p.hold("alt"):
        p.press("tab")
    time.sleep(0.2)
    solveError(query=query)
    with p.hold("ctrl"):
        p.keyDown("shift")
        p.press("e")
        p.keyUp("shift")
        time.sleep(0.2)
    formatCode()
    
    return None