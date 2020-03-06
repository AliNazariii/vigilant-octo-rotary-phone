n, k = map(int, input().split())
ci = []
for i in range(n):
    ci.append(int(input()))

sum = 0
for i in range(n):
    sum += ci[i]

if k <= sum:
    print("YES")
else:
    print("NO")
