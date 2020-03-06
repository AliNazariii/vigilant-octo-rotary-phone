def searchVertical(i, j, wStar):
    hStar = 0
    for k in range(i, -1, -1):
        if myTable[k][j] == '*':
            hStar += 1
    if hStar >= 2 * wStar:
        return True


n, m = map(int, input().split())

myTable = []
for i in range(n):
    myTable.append(list(input()))

result = 0
for i in range(n - 1, -1, -1):
    wStar = 0
    for j in range(m - 1, -1, -1):
        if myTable[i][j] == '*':
            wStar += 1
            if wStar >= 2:
                for t in range(2, wStar + 1):
                    if searchVertical(i, j, t) is True:
                        result += 1

print(result)