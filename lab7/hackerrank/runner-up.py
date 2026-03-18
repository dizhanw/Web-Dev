n = int(input())


scores = list(map(int, input().split()))

unique_scores = list(set(scores))

unique_scores.sort()


runner_up = unique_scores[-2]

print(runner_up)