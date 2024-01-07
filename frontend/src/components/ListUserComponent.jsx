import React, { Component } from 'react';
import UserService from '../services/UserService';
import Swal from "sweetalert2";
class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
          
        
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then((res) => {
            this.setState({
                users: this.state.users.filter((user) => user.id !== id)
            });
        });
    }
    deleteUser(id) {
        Swal.fire({
          title: 'Apakah Anda yakin?',
          text: 'Data peminjaman buku akan dihapus!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iya, Hapus!',
          cancelButtonText: 'Tidak'
        }).then((result) => {
          if (result.isConfirmed) {
            UserService.deleteUser(id).then((res) => {
              this.setState({
                users: this.state.users.filter((user) => user.id !== id)
              });
              Swal.fire({
                icon: 'success',
                title: 'Data peminjaman buku dihapus!',
                showConfirmButton: false,
                timer: 1500
              });
            });
          }
        });
      }
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data === null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }
        

    addUser() {
        this.props.history.push('/add-user/_add');
    }
    
    
    render() {
        return (
            <div>
                <h2 className="text-center">List Users Data Library</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>
                        Tambah Data Peminjaman Buku
                    </button>
                </div>
                <br />
                <div className="row">
                <table className="table table-striped table-bordered" style={{ color: 'black', backgroundColor: 'white' }}>

                        <thead>
                            <tr>
                                <th>Judul Buku</th>
                                <th>Jumlah</th>
                                <th>Nama Peminjam</th>
                                <th>Alamat Peminjam</th>
                                <th>No Hp Peminjam</th>
                                <th>Tanggal Peminjaman</th>
                                <th>Tanggal Pengembalian</th>
                                <th>Lama Pinjam</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.judul_buku}</td>
                                    <td>{user.jumlah}</td>
                                    <td>{user.nama_peminjam}</td>
                                    <td>{user.alamat_peminjam}</td>
                                    <td>{user.noHp_peminjam}</td>
                                    <td>{user.tanggal_pinjam}</td>
                                    <td>{user.tanggal_pengembalian}</td>
                                    <td>{user.lama_pinjam}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button
                                                onClick={() => this.viewUser(user.id)}
                                                className="btn btn-info"
                                            >
                                                View
                                            </button>

                                            <button
                                                onClick={() => this.editUser(user.id)}
                                                className="btn btn-info"
                                            >
                                                Update
                                            </button>

                                            <button
                                                onClick={() => this.deleteUser(user.id)}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;
