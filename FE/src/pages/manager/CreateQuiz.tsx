


const CreateQuiz = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-bold">Tạo Quiz Mới</h2>

      {/* Tên quiz */}
      <div>
        <label className="block font-medium mb-1">Tên Quiz:</label>
        <input
          className="w-full border rounded p-2"
          placeholder="Nhập tên quiz"
        />
      </div>

      {/* Thời lượng */}
      <div>
        <label className="block font-medium mb-1">Thời lượng (phút):</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          placeholder="Nhập thời lượng"
        />
      </div>

      {/* Danh sách câu hỏi */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Danh sách câu hỏi</h3>
          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Thêm câu hỏi
          </button>
        </div>

        {/* Câu hỏi mẫu (1) */}
        <div className="border p-4 rounded space-y-2 bg-gray-50">
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Nội dung câu hỏi"
            rows={2}
          />

          {/* Danh sách đáp án */}
          <div className="space-y-2">
            {['A', 'B', 'C', 'D'].map((label, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border p-2 rounded"
                  placeholder={`Đáp án ${label}`}
                />
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span>Đúng</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Thêm các khối câu hỏi khác tương tự ở đây */}
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Lưu Quiz
      </button>
    </div>
  )
}

export default CreateQuiz
