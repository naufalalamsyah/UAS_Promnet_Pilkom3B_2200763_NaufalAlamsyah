import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-8 offset-md-2">
          <h3 className="text-center">Data User Library</h3>
          <div className="card-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{this.state.user.id}</td>
                </tr>
                <tr>
                  <td>Judul Buku:</td>
                  <td>{this.state.user.judul_buku}</td>
                </tr>
                <tr>
                  <td>Jumlah:</td>
                  <td>{this.state.user.jumlah}</td>
                </tr>
                <tr>
                  <td>Nama Peminjam:</td>
                  <td>{this.state.user.nama_peminjam}</td>
                </tr>
                <tr>
                  <td>Alamat Peminjam:</td>
                  <td>{this.state.user.alamat_peminjam}</td>
                </tr>
                <tr>
                  <td>No Handphone Peminjam:</td>
                  <td>{this.state.user.noHp_peminjam}</td>
                </tr>
                <tr>
                  <td>Tanggal Pinjam:</td>
                  <td>{this.state.user.tanggal_pinjam}</td>
                </tr>
                <tr>
                  <td>Tanggal Pengembalian:</td>
                  <td>{this.state.user.tanggal_pengembalian}</td>
                </tr>
                <tr>
                  <td>Lama Pinjam:</td>
                  <td>{this.state.user.lama_pinjam}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
