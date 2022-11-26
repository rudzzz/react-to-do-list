import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import "./TaskDetail.css"
import {useHistory} from "react-router-dom"

const TaskDetail = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam explicabo veritatis dolore quis illo eveniet, delectus, obcaecati eius ipsa quisquam consectetur iste. Iste architecto repellat ut voluptatibus cumque fugiat quis.
                    Debitis fugiat repellat sint inventore optio sequi aut culpa amet voluptate quae voluptatem obcaecati hic ipsam quisquam veritatis vitae veniam, maiores, enim aliquid, nihil soluta dolor. In accusamus molestiae cupiditate.
                    Labore, fuga cupiditate tempore odio temporibus ullam necessitatibus eos nihil alias non laborum. Velit minima, sint labore nihil enim cum magnam reprehenderit amet nam maiores ratione ipsam deserunt. Nesciunt, cupiditate?
                    Non cumque consequatur molestias reprehenderit consectetur, officiis necessitatibus iste provident at, ab modi odio iusto ducimus eos repudiandae. Ipsum quia nam alias ut ea unde facilis dolorem placeat reprehenderit ullam!
                    Quis ipsum obcaecati molestiae suscipit reiciendis aliquid, similique harum ut veritatis voluptatem ipsam autem numquam, sequi cumque cum saepe, amet vel facilis velit magni aspernatur laudantium earum. Sint, pariatur eius.
                </p>
            </div>
        </>
    );
}

export default TaskDetail;