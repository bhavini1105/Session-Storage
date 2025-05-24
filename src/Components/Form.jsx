import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [student, setStudent] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId == null) {
      const data = [...studentData, { ...student, id: Date.now() }];
      setStudentData(data);
      sessionStorage.setItem('Student', JSON.stringify(data));
    } else {
      const updatedList = studentData.map((item) =>
        item.id === editId ? { ...item, ...student } : item
      );
      setStudentData(updatedList);
      sessionStorage.setItem('Student', JSON.stringify(updatedList));
      setEditId(null);
    }

    navigator('/student');
    setStudent({});
  };

  const handleEdit = (id) => {
    const student = studentData.find((item) => item.id === id);
    setStudent(student);
    setEditId(id);
    navigator('/');
  };

  const handleDelete = (id) => {
    const updated = studentData.filter((item) => item.id !== id);
    setStudentData(updated);
    sessionStorage.setItem('Student', JSON.stringify(updated));
  };

  useEffect(() => {
    const studentData = JSON.parse(sessionStorage.getItem('Student')) || [];
    setStudentData(studentData);
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="form-container shadow-sm"
          style={{
            maxWidth: '500px',
            margin: '80px auto',
            background: '#ffffff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          }}
        >
          <h3
            className="form-title text-center"
            style={{
              fontWeight: 600,
              marginBottom: '25px',
            }}
          >
            Student Registration
          </h3>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">
                Student Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="studentName"
                name="sname"
                value={student.sname || ''}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentMarks" className="form-label">
                Marks
              </label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="studentMarks"
                name="marks"
                value={student.marks || ''}
                placeholder="Enter marks"
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-submit"
                style={{
                  backgroundColor: '#0d6efd',
                  color: '#fff',
                  transition: '0.3s',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className="container">
        <h2 className="text-center mb-4">Student Data</h2>
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Marks</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((val, idx) => (
                <tr key={val.id}>
                  <td>{idx + 1}</td>
                  <td>{val.sname}</td>
                  <td>{val.marks}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(val.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(val.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Form;
