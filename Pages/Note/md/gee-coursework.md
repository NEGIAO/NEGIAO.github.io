# GEE结课作业 - 随机森林分类，参数优化调参

该部分为基于python scikit-learn库实现的随机森林优化调参代码，适用于包含10个特征（Sentinel-2波段 + NDVI指数）的数据集。
## 1. 调参代码
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, train_test_split, learning_curve
from sklearn.metrics import classification_report, confusion_matrix

# 1. 加载新数据
df = pd.read_csv('Data/nanyang_samples.csv')

# 2. 特征列表
bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B11', 'B12', 'NDVI']
label = 'class'

# 数据预处理：删除采样中产生的空值
df = df.dropna(subset=bands + [label])
X = df[bands]
y = df[label]

# 3. 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 4. 针对 10 个特征调整搜索网格
param_grid = {
    'n_estimators': [100, 200, 300, 500],
    'max_depth': [None, 15, 25, 40],
    'min_samples_split': [2, 5, 10],
    'max_features': ['sqrt', 'log2', None] 
}

# 5. 执行网格搜索
rf = RandomForestClassifier(random_state=42, n_jobs=-1)
grid_search = GridSearchCV(rf, param_grid, cv=5, scoring='accuracy', verbose=1)
grid_search.fit(X_train, y_train)

# 6. 结果展示
print("\n" + "="*30)
print(f"最佳参数: {grid_search.best_params_}")
print(f"交叉验证最高精度 (OA): {grid_search.best_score_:.4f}")
print("="*30)

# 7. 测试集评估
best_rf = grid_search.best_estimator_
y_pred = best_rf.predict(X_test)
print("\n测试集分类报告:")
print(classification_report(y_test, y_pred))

# 8. 特征重要性排序图
importances = best_rf.feature_importances_
indices = np.argsort(importances)[::-1]

plt.figure(figsize=(12, 6))
plt.title("Feature Importances (Sentinel-2 + NDVI)")
sns.barplot(x=[bands[i] for i in indices], y=importances[indices], palette="magma")
plt.ylabel("Importance Score")
plt.xlabel("Bands")

# 自动调整布局，防止标签被遮挡
plt.tight_layout()

# 保存到本地，DPI 为 450
plt.savefig('nanyang_feature_importance.png', dpi=450)

# 显示图像
plt.show()
```

## 2. 在线演示

该模型已在线部署，可以直接在下方进行动态交互式，查看不同参数对分类效果的影响：

<iframe src="https://negiao-dynamic.share.connect.posit.cloud/" width="100%" height="1200px" style="border: 1px solid var(--border); border-radius: 8px; background: white; margin-top: 15px;"></iframe>

> **提示**：如果上方窗口无法加载，[👉 请点击这里跳转到独立页面查看](https://negiao-dynamic.share.connect.posit.cloud/)

## 3. 运行结果

### 3.1 输出日志

```text
Fitting 5 folds for each of 144 candidates, totalling 720 fits

==============================
最佳参数: {'max_depth': None, 'max_features': None, 'min_samples_split': 10, 'n_estimators': 500}
交叉验证最高精度 (OA): 0.9427
==============================

测试集分类报告 (加入 NDVI 后):
              precision    recall  f1-score   support

           0       0.96      0.79      0.86        28
           1       0.74      0.86      0.79        29
           2       0.97      0.95      0.96        37
           3       0.89      0.92      0.91        26

    accuracy                           0.88       120
   macro avg       0.89      0.88      0.88       120
weighted avg       0.89      0.88      0.88       120
```

### 3.2 特征重要性分析

### ![特征重要性排序图](resources/nanyang_feature_importance.webp)
> 由上图可见，NDVI指数在地类区分中起到了重要作用，显著提升了模型的分类性能。<br>其中，红光波段（B4）和短波红外波段（B11、B12）也表现出较高的重要性，符合植被分类的光谱特征。
---

*笔记持续更新中...*