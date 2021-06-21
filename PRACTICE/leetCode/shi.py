


def skillFinder(input):
    skillData = input.splitlines()
 
    userObj = {}
    for i in range(0, len(skillData)):
        skills = skillData[i].split(" ")
   
        key = skills[0]
        value = skills[1];
        if key not in userObj:
            userObj[key] = []
            userObj[key].append(value)
        else:
            userObj[key].append(value)
        
    # return userObj

    for key,value in userObj.items():
        # if userObj[key] == "js":
        #     return key
        if "js" in dict.values():
            return key


ans = skillFinder("Nrupul cmd\nPrateek js\nAman ds\nNrupul python\nAlbert js\nAlbert react\nAman algo\nPrateek html\nNrupul sql")
print(ans)