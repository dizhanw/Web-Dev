n = int(input())

students = []
for i in range(n):
    name = input()
    score = float(input())
    students.append([name, score])


unique_scores = []
for student in students:
    if student[1] not in unique_scores:
        unique_scores.append(student[1])
unique_scores.sort()


second_lowest_score = unique_scores[1]


second_lowest_students = []
for student in students:
    if student[1] == second_lowest_score:
        second_lowest_students.append(student[0])

second_lowest_students.sort()
for name in second_lowest_students:
    print(name)