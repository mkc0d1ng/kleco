// قراءة البيانات من localStorage
const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');

const totalExpensesEl = document.getElementById('totalExpenses');
const countItemsEl = document.getElementById('countItems');
const lastDateEl = document.getElementById('lastDate');

function computeStats(data){
  if(!data.length){
    totalExpensesEl.textContent = "0";
    countItemsEl.textContent = "0";
    lastDateEl.textContent = "—";
    return;
  }

  const total = data.reduce((a,b) => a + parseFloat(b.montant || 0), 0);
  const dates = data.map(d => d.date).filter(Boolean).sort();

  totalExpensesEl.textContent = total.toFixed(2);
  countItemsEl.textContent = data.length;
  lastDateEl.textContent = dates[dates.length - 1] || "—";
}

document.getElementById("goAdd").onclick = () => {
  alert("سيتم تحويل الزر لصفحة إضافة مصروف عند إنشائها.");
};

document.getElementById("goList").onclick = () => {
  alert("سيتم تحويل الزر لصفحة عرض المصاريف عند إنشائها.");
};

computeStats(expenses);