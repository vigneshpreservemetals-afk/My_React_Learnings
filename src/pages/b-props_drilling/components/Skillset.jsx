import React from "react";

export default function Skillset({ studentSkillSet }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> S.No </th>
            <th> Skills </th>
            <th> Academic Year </th>
            <th> Result </th>
          </tr>
        </thead>

        <tbody>
          {studentSkillSet.map((value, index) => {
            return (
              <tr>
                <td> {index + 1} </td>
                <td> {value?.course} </td>
                <td> {value?.year} </td>
                <td> {value?.grade} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
