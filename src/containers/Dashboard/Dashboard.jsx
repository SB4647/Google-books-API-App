import styles from "./Dashboard.module.scss";
import Header from "../../components/Header";
import Books from "../../components/Books";

const Dashboard = () => {
    return (
        <div className={styles.contents}>
            <Header />
            <p>Search a book title in field below.</p>
            <Books />
        </div>
    );
};

export default Dashboard;
