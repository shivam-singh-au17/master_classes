# n = 3
# m = 3
# mat = ['aba','xyz','bdr']
# s= 'axbaydb'
# def man(string, a):
#   l = [i for i in string]
#   for i in range(len(string)):
#     if a == l[i]:
#       l[i] = ''
#       return ("".join(l))
# def xyz(n, mat, s):
#   c = 0
#   for i in range(len(s)):
#     if s[i] not in mat[c]:
#       return False
#     else:
#       mat[c] = man(mat[c], s[i])
#     c += 1
#     if c >= n:
#       c = 0
#   return True
# print(xyz(n, mat, s))




n = 3
m = 3
mat = ['aba', 'xyz', 'bdr']
myStr = "axbaydb"

i = 0
ans = True
while len(myStr)!=i:
    # print(mat[i])
    if myStr[i] in mat[i%n]:
        ans = True
        mat[i%n] = mat[i%n].replace(myStr[i], '', 1)
    else:
        ans = False
        break
    i+=1


if ans == True:
    print("Yes")
else:
    print("No")
 