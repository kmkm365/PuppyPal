import dlcmm

def main():
    dlcmm.skeleton_train('cat', './model')
    dlcmm.skeleton_train('dog', './model')
    
    result = dlcmm.action_recognition('DOG')
    print("\n\n-----------------------------------------------\n")
    for action in result.keys() :
        print(action, result[action])

if __name__ == "__main__":
    main()
