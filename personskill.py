# -*- coding: utf-8 -*-
"""PersonSkill.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1GBaFJHyoA_mzjiVFLbWVKeIXjf3VtElg
"""

import numpy as np
import matplotlib.pyplot as plt

# Function to get user-provided scores
def get_user_scores(categories):
    print("Please provide your scores for the following categories (1-5):")
    user_scores = []
    for category in categories:
        while True:
            try:
                score = int(input(f"{category}: "))
                if 1 <= score <= 5:
                    user_scores.append(score)
                    break
                else:
                    print("Invalid input. Please enter a score between 1 and 5.")
            except ValueError:
                print("Invalid input. Please enter a number.")
    return user_scores

# Normalize scores
def normalize_scores(scores, max_value=100):
    max_score = max(scores)
    if max_score == 0:
        return [0 for _ in scores]
    return [(score / max_score) * max_value for score in scores]

# Generate radar chart
def generate_radar_chart(scores, categories):
    num_vars = len(categories)

    # Compute the angle for each category
    angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()
    scores += scores[:1]  # Complete the loop for radar chart
    angles += angles[:1]

    fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
    ax.fill(angles, scores, color='blue', alpha=0.25)
    ax.plot(angles, scores, color='blue', linewidth=2)
    ax.set_yticks([])
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=10)

    plt.title("Your Skill Profile", size=16, color='blue', fontweight='bold')
    plt.show()

# Main function
def main():
    categories = ['Analytical', 'Creativity', 'Communication', 'Leadership', 'Teamwork']  # Customize categories
    user_scores = get_user_scores(categories)
    normalized_scores = normalize_scores(user_scores)
    generate_radar_chart(normalized_scores, categories)

if __name__ == "__main__":
    main()